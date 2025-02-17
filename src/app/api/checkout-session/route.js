// src/app/api/checkout-session/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE);

export async function POST(req) {
  try {
    const { session_id } = await req.json();
    console.log("🔍 Fetching session for ID:", session_id);

    if (!session_id) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    return NextResponse.json(session, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching session:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
