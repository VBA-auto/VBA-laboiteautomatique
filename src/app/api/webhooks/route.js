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
      const session = event.data.object; // Access session info here

      // Log the successful payment session
      console.log("✅ Payment successful!", session);

      // Redirect to your custom confirmation page
      const confirmationUrl = `https://laboiteautomatique.com/confirmation?session_id=${session.id}`;
      return NextResponse.redirect(confirmationUrl);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("❌ Webhook Error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
