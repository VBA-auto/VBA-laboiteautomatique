import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE);

export async function POST(req) {
  try {
    const { session_id } = await req.json(); // Fixing session_id extraction

    if (!session_id) {
      return NextResponse.json(
        { error: "Missing session ID" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);
    return NextResponse.json(session);
  } catch (error) {
    console.error("❌ Error fetching session:", error);
    return NextResponse.json({ error: "Invalid session ID" }, { status: 400 });
  }
}
