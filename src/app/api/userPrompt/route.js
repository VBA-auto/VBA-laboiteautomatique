// /api/userPromt/route.js

import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { userPrompt } = body;

    if (!userPrompt || typeof userPrompt !== "string") {
      return new Response(
        JSON.stringify({ error: "Invalid or missing user prompt" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    const result = await db.collection("userPrompts").insertOne({
      prompt: userPrompt,
      timestamp: new Date(),
    });

    return new Response(
      JSON.stringify({
        message: "Prompt stored successfully",
        id: result.insertedId,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error storing prompt:", error);
    return new Response(JSON.stringify({ error: "Failed to store prompt" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
