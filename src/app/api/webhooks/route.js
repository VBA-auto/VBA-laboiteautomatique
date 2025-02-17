// // src/app/api/webhooks/route.js
// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE, {
//   apiVersion: "2023-10-16",
// });

// export async function POST(req) {
//   const payload = await req.text();
//   const sig = req.headers.get("stripe-signature");

//   try {
//     const event = stripe.webhooks.constructEvent(
//       payload,
//       sig,
//       process.env.NEXT_WEBHOOK_SECRET
//     );

//     console.log("🔔 Received event:", event.type);

//     if (event.type === "checkout.session.completed") {
//       const session = event.data.object;
//       console.log("✅ Payment successful!", session);
//     }

//     return NextResponse.json({ received: true }, { status: 200 });
//   } catch (err) {
//     console.error("❌ Webhook Error:", err);
//     return NextResponse.json({ error: "Webhook error" }, { status: 400 });
//   }
// }
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Use restricted key with webhook read permissions
const stripe = new Stripe(process.env.NEXT_RESTRICTED_STRIPE, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  const payload = await req.text(); // Raw body needed for webhook verification
  const sig = req.headers.get("stripe-signature");
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    if (!sig || !endpointSecret) {
      throw new Error("❌ Missing signature or endpoint secret");
    }

    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    console.log("✅ Webhook event received:", event.type);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }

  // Handle the specific event
  switch (event.type) {
    case "checkout.session.completed":
      console.log("✅ Payment Successful:", event.data.object);
      break;
    case "checkout.session.expired":
      console.log("❌ Payment Expired:", event.data.object);
      break;
    default:
      console.log("ℹ️ Unhandled event type:", event.type);
  }

  return NextResponse.json({ received: true });
}
