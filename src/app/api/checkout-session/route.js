// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE, {
//   apiVersion: "2023-10-16",
// });

// export async function POST(req) {
//   try {
//     const { session_id } = await req.json();
//     console.log("✅ Received session_id:", session_id);

//     if (!session_id) {
//       console.error("❌ Missing session ID");
//       return NextResponse.json(
//         { error: "Session ID is required" },
//         { status: 400 }
//       );
//     }

//     const session = await stripe.checkout.sessions.retrieve(session_id, {
//       expand: ["line_items.data.price.product"],
//     });

//     if (!session) {
//       console.error("❌ Session not found in Stripe");
//       return NextResponse.json({ error: "Session not found" }, { status: 404 });
//     }

//     console.log("✅ Stripe Session Retrieved:", session);
//     const products = session.line_items.data.map((item) => ({
//       id: item.price.product.id,
//       name: item.price.product.name,
//       image: item.price.product.images[0] || null,
//       price: item.price.unit_amount,
//       quantity: item.quantity,
//     }));

//     return NextResponse.json({
//       id: session.id,
//       amount_total: session.amount_total,
//       payment_status: session.payment_status,
//       customer_details: session.customer_details,
//       products: products, // Sending products array to frontend
//     });
//   } catch (error) {
//     console.error("❌ Server Error fetching session:", error);
//     return NextResponse.json(
//       { error: error.message || "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Use RESTRICTED key (with proper read permissions)
const stripe = new Stripe(process.env.NEXT_RESTRICTED_STRIPE);

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

    // Retrieve checkout session
    const session = await stripe.checkout.sessions.retrieve(session_id);

    // Fetch line items (purchased products)
    const lineItems = await stripe.checkout.sessions.listLineItems(session_id);

    // Fetch customer details
    let customer = {};
    if (session.customer) {
      customer = await stripe.customers.retrieve(session.customer);
    }

    // Fetch product images and details
    const products = await Promise.all(
      lineItems.data.map(async (item) => {
        const product = await stripe.products.retrieve(item.price.product);
        return {
          name: item.description, // Product name
          price: item.amount_total / 100, // Convert from cents
          quantity: item.quantity,
          image: product.images.length > 0 ? product.images[0] : null, // Product image
        };
      })
    );

    return NextResponse.json({
      id: session.id,
      amount_total: session.amount_total / 100, // Convert from cents
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email || customer.email, // Get email
      customer_name: customer.name || "Unknown Customer", // Get name
      products,
    });
  } catch (error) {
    console.error("❌ Server Error fetching session:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
