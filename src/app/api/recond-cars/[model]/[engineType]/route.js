import clientPromise from "@/lib/mongodb";

export async function PUT(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");
    const { model, engineType } = params;
    const { stock, paymentLink } = await req.json();

    // Decode model and engineType
    const decodedModel = decodeURIComponent(model);
    const decodedEngineType = decodeURIComponent(engineType);

    const result = await db.collection("recond-cars").updateOne(
      { model: decodedModel, engineType: decodedEngineType },
      { $set: { stock, paymentLink } }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: "Car not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Car updated successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating car:", error);
    return new Response(JSON.stringify({ error: "Failed to update car" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
