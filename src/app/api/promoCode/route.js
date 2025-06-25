import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    const promoCodes = await db
      .collection("promoCode")
      .find({})
      .sort({ price: 1 })
      .toArray();

    return new Response(JSON.stringify(promoCodes), { status: 200 });
  } catch (err) {
    console.error("GET /api/promocode error", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch promo codes" }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { action, data } = body;

    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    switch (action) {
      case "add":
        const newPromoCode = {
          price: data.price,
          codes: data.codes, // Object with car names as keys
          status: data.status || false,
          createdAt: new Date(),
        };

        const insertResult = await db
          .collection("promoCode")
          .insertOne(newPromoCode);

        return new Response(
          JSON.stringify({
            success: true,
            id: insertResult.insertedId,
          }),
          { status: 200 }
        );

      case "update":
        const { _id, ...updateData } = data;

        const updateResult = await db.collection("promoCode").updateOne(
          { _id: new ObjectId(_id) },
          {
            $set: {
              ...updateData,
              updatedAt: new Date(),
            },
          }
        );

        return new Response(
          JSON.stringify({
            success: true,
            modifiedCount: updateResult.modifiedCount,
          }),
          { status: 200 }
        );

      case "delete":
        const deleteResult = await db
          .collection("promoCode")
          .deleteOne({ _id: new ObjectId(data._id) });

        return new Response(
          JSON.stringify({
            success: true,
            deletedCount: deleteResult.deletedCount,
          }),
          { status: 200 }
        );

      case "toggle-status":
        // First, set all promo codes to inactive
        await db.collection("promoCode").updateMany(
          {},
          {
            $set: {
              status: false,
              updatedAt: new Date(),
            },
          }
        );

        // Then, set only the selected one to active (if status is true)
        let toggleResult;
        if (data.status) {
          toggleResult = await db.collection("promoCode").updateOne(
            { _id: new ObjectId(data._id) },
            {
              $set: {
                status: true,
                updatedAt: new Date(),
              },
            }
          );
        } else {
          // If setting to inactive, just keep all inactive (already done above)
          toggleResult = { modifiedCount: 1 };
        }

        return new Response(
          JSON.stringify({
            success: true,
            modifiedCount: toggleResult.modifiedCount,
          }),
          { status: 200 }
        );

      default:
        return new Response(JSON.stringify({ error: "Invalid action" }), {
          status: 400,
        });
    }
  } catch (err) {
    console.error("POST /api/promocode error", err);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
      }
    );
  }
}

// Import ObjectId for MongoDB operations
import { ObjectId } from "mongodb";
