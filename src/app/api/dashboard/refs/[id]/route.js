// app/api/refs/[id]/route.js
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const { stock } = await req.json();

    console.log(`Received Stock for Ref ID ${id}:`, stock);

    if (typeof stock !== "number" || stock < 0) {
      return NextResponse.json(
        { message: "Invalid stock value" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    const result = await db
      .collection("refModel")
      .updateOne({ _id: new ObjectId(id) }, { $set: { stock } });

    console.log("MongoDB Update Result:", result);

    if (result.modifiedCount === 1) {
      return NextResponse.json(
        { message: "Stock updated successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Ref code not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating ref stock:", error);
    return NextResponse.json(
      { error: "Failed to update stock" },
      { status: 500 }
    );
  }
}
