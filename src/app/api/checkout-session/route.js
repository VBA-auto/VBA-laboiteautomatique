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
    // const session = await stripe.checkout.sessions.retrieve(session_id);
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items.data.price.product"], // 🔥 Expanding to get product details
    });

    if (!session) {
      console.error("❌ Session not found in Stripe");
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    console.log("✅ Stripe Session Retrieved:", session);
    // Extract purchased products
    const products = session.line_items.data.map((item) => ({
      id: item.price.product.id,
      name: item.price.product.name,
      image: item.price.product.images[0] || null,
      price: item.price.unit_amount,
      quantity: item.quantity,
    }));

    return NextResponse.json({
      id: session.id,
      amount_total: session.amount_total,
      payment_status: session.payment_status,
      customer_details: session.customer_details,
      products: products, // Sending products array to frontend
    });
  } catch (error) {
    console.error("❌ Server Error fetching session:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
