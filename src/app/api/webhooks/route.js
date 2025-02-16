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
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      console.log("✅ Payment successful!", event.data.object);

      // Client ke redirect korar logic
      return NextResponse.redirect(
        `https://laboiteautomatique.com/confirmation?session_id=${event.data.object.id}`
      );
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("❌ Webhook Error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
