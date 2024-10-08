import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Handle stripe logic here

    console.info("Stripe flow here")
  } catch (error) {
    console.error(error)

    return new NextResponse("Internal server error", { status: 500 })
  }
}
