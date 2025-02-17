// src/app/api/webhooks/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature");

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.NEXT_WEBHOOK_SECRET
    );

    console.log("🔔 Received event:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("✅ Payment successful!", session);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error("❌ Webhook Error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
