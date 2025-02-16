// src/app/api/checkout-session/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE);

export async function POST(req) {
  try {
    const { line_items, success_url, cancel_url } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${success_url}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("❌ Error creating session:", error);
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 400 }
    );
  }
}
