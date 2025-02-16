// src/app/api/webhooks/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE);

export async function POST(req) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature");

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.NEXT_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("✅ Payment successful!", session);
      // এখানে তুমি ডেটাবেস আপডেট বা অন্য কোনো প্রসেসিং করতে পারো
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("❌ Webhook Error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
