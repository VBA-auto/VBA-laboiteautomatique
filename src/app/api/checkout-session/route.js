// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.NEXT_RESTRICTED_STRIPE);

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

//     const session = await stripe.checkout.sessions.retrieve(session_id);

//     const lineItems = await stripe.checkout.sessions.listLineItems(session_id);

//     let customer = {};
//     if (session.customer) {
//       customer = await stripe.customers.retrieve(session.customer);
//     }

//     const products = await Promise.all(
//       lineItems.data.map(async (item) => {
//         const product = await stripe.products.retrieve(item.price.product);
//         return {
//           name: item.description,
//           price: item.amount_total / 100,
//           quantity: item.quantity,
//           image: product.images.length > 0 ? product.images[0] : null,
//         };
//       })
//     );

//     return NextResponse.json({
//       id: session.id,
//       amount_total: session.amount_total / 100,
//       payment_status: session.payment_status,
//       customer_email: session.customer_details?.email || customer.email,
//       customer_name: customer.name || "Unknown Customer",
//       products,
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

    // Fetch the checkout session details
    const session = await stripe.checkout.sessions.retrieve(session_id);
    // Fetch line items
    const lineItems = await stripe.checkout.sessions.listLineItems(session_id);

    let customer = {};
    if (session.customer) {
      customer = await stripe.customers.retrieve(session.customer);
    }

    const products = await Promise.all(
      lineItems.data.map(async (item) => {
        const product = await stripe.products.retrieve(item.price.product);

        return {
          name: product.name, // ✅ Use product name
          description: product.description || "No description available", // ✅ Fetch description properly
          price: item.amount_total / 100, // Convert cents to currency
          quantity: item.quantity,
          image: product.images.length > 0 ? product.images[0] : null, // Get product image
        };
      })
    );

    return NextResponse.json({
      id: session.id,
      amount_total: session.amount_total / 100,
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email || customer.email,
      customer_name: customer.name || "Unknown Customer",
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
