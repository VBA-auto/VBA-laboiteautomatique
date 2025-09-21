// app/api/cars/[model]/[type]/route.js
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function PUT(_req, { params }) {
  const { model, type } = params;

  try {
    const body = await _req.json();
    const { stock } = body;

    // Debug logs (Next.js server logs)
    console.log("Received Model:", model);
    console.log("Received Type:", type);
    console.log("Received Stock:", stock);

    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    const result = await db
      .collection("carsModel")
      .updateOne({ model }, { $set: { [`types.${type}.stock`]: stock } });

    console.log("Update Result:", result);

    if (result.modifiedCount === 1) {
      return NextResponse.json(
        { message: "Stock updated successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Car or type not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating stock:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
