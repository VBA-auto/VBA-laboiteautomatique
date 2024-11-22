import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    // Fetch data from the `carsModel` collection
    const refsCode = await db.collection("refModel").find().toArray();

    // Return the data as JSON
    return new Response(JSON.stringify(refsCode), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching refs:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch rrefs" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
