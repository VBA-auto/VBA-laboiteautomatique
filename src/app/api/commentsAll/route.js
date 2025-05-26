import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    const comments = await db
      .collection("comments")
      .find({})
      .sort({ timestamp: -1 })
      .toArray();

    return NextResponse.json({ comments });
  } catch (error) {
    console.error("Error fetching all comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}
