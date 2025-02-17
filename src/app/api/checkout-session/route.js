import { NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure Stripe API Key is valid
const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  try {
    const { session_id } = await req.json();
    console.log("✅ Received session_id:", session_id);

    if (!session_id) {
      console.error("❌ Missing session ID");
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Try fetching the Stripe session
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (!session) {
      console.error("❌ Session not found in Stripe");
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    console.log("✅ Stripe Session Retrieved:", session);

    return NextResponse.json(session, { status: 200 });
  } catch (error) {
    console.error("❌ Server Error fetching session:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
