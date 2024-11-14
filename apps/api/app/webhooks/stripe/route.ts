import { headers } from "next/headers"
import { NextResponse } from "next/server"

import { posthog } from "@solistack/analytics/posthog/server"
import { env } from "@solistack/env/web/server"
import { parseError } from "@solistack/observability/error"
import { type Stripe, stripe } from "@solistack/payments"

const secret = env.STRIPE_WEBHOOK_SECRET

async function handleCheckoutSessionCompleted(
  session: Stripe.Checkout.Session
) {
  if (!session.customer) {
    return
  }

  if (session.payment_status === "paid") {
    console.info("Payment successful")

    // posthog.capture({
    //   event: "Payment Successful",
    //   distinctId: session.customer,
    // })
  }
}

async function handleSubscriptionScheduleCanceled(
  session: Stripe.SubscriptionSchedule
) {
  if (!session.customer) {
    return
  }

  if (session.canceled_at) {
    console.info("Subscription canceled")

    // posthog.capture({
    //   event: "User Unsubscribed",
    //   distinctId: session.customer,
    // })
  }
}

export const POST = async (request: Request) => {
  try {
    const body = await request.text()
    const headerPayload = await headers()

    const signature = headerPayload.get("stripe-signature")

    if (!signature) {
      throw new Error("missing stripe-signature header")
    }

    const event = stripe.webhooks.constructEvent(body, signature, secret)

    switch (event.type) {
      case "checkout.session.completed":
        {
          await handleCheckoutSessionCompleted(event.data.object)
        }
        break

      case "subscription_schedule.canceled":
        {
          handleSubscriptionScheduleCanceled(event.data.object)
        }
        break

      default: {
        console.warn(`Unhandled event type ${event.type}`)
      }
    }

    await posthog.shutdown()

    return NextResponse.json({ result: event, ok: true })
  } catch (error) {
    const message = parseError(error)

    return NextResponse.json(
      {
        message: "Something went wrong",
        ok: false,
      },
      { status: 500 }
    )
  }
}
