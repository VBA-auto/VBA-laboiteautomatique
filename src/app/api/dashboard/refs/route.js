// app/api/refs/route.js
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");
    const refs = await db.collection("refModel").find().toArray();
    return NextResponse.json(refs, { status: 200 });
  } catch (error) {
    console.error("Error fetching refs:", error);
    return NextResponse.json(
      { error: "Failed to fetch refs" },
      { status: 500 }
    );
  }
}
