import { headers } from "next/headers"
import { NextResponse } from "next/server"

import { env } from "@solistack/env/web/server"
import { type Stripe, stripe } from "@solistack/stripe"

const secret = env.STRIPE_WEBHOOK_SECRET

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("stripe-signature") as string

  if (!secret || !signature) {
    return new NextResponse("Missing Stripe webhook secret or signature", {
      status: 400,
    })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    )
  } catch (_error) {
    console.error(_error)

    return new NextResponse("Stripe webhook error", { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  switch (event.type) {
    case "checkout.session.completed":
      {
        if (session.payment_status === "paid") {
          // Credit Card Payment

          console.info("Payment successful")
        }

        if (session.payment_status === "unpaid" && session.payment_intent) {
          // Boleto Payment

          const paymentIntent = await stripe.paymentIntents.retrieve(
            session.payment_intent.toString()
          )

          const hostedVoucherUrl =
            paymentIntent.next_action?.boleto_display_details
              ?.hosted_voucher_url

          if (hostedVoucherUrl) {
            // Send boleto to customer email

            const userEmail = session.customer_details?.email

            console.info({ userEmail })
          }
        }
      }
      break

    case "checkout.session.expired":
      {
        if (session.payment_status === "unpaid") {
          // payment has expired

          console.info("payment expired")
        }
      }
      break

    case "checkout.session.async_payment_succeeded":
      {
        if (session.payment_status === "paid") {
          // customer has paid boleto

          console.info("boleto payment has been confirmed")
        }
      }
      break

    case "checkout.session.async_payment_failed":
      {
        if (session.payment_status === "unpaid") {
          // boleto payment expired

          console.info("boleto payment has been failed")
        }
      }
      break

    case "customer.subscription.deleted": {
      console.info("customer canceled the subscription")
    }
  }

  return NextResponse.json({ result: event, ok: true })
}
