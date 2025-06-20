import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { active, date } = await req.json();

    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    // Optional: remove previous promos (keep 1 global setting)
    await db.collection("Promo").deleteMany({});

    await db.collection("Promo").insertOne({
      active,
      date,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("POST /api/promo error", err);
    return new Response(JSON.stringify({ error: "Failed to save" }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    const promo = await db
      .collection("Promo")
      .findOne({}, { sort: { createdAt: -1 } });

    return new Response(JSON.stringify(promo), { status: 200 });
  } catch (err) {
    console.error("GET /api/promo error", err);
    return new Response(JSON.stringify({ error: "Failed to fetch" }), {
      status: 500,
    });
  }
}
