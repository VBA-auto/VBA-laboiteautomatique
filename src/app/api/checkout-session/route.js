import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE);

export async function POST(req) {
  try {
    // Parse the request body to get the session_id
    const payload = await req.json(); // Get JSON data
    console.log("Received payload:", payload); // Debugging: Log incoming request

    const { session_id } = payload;

    // If session_id is missing, return an error response
    if (!session_id) {
      return NextResponse.json(
        { error: "Missing session ID" },
        { status: 400 }
      );
    }

    // Fetch the session from Stripe using the session_id
    const session = await stripe.checkout.sessions.retrieve(session_id);

    // If no session was found, throw an error
    if (!session) {
      throw new Error("Session not found");
    }

    // Return the session data in JSON format
    return NextResponse.json(session);
  } catch (error) {
    // Log the error and return an error response
    console.error("❌ Error fetching session:", error);
    return NextResponse.json(
      { error: error.message || "Invalid session ID" },
      { status: 400 }
    );
  }
}
