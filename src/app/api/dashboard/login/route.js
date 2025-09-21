// app/api/login/route.js
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, pass } = await req.json();
    console.log("Received email:", email);
    console.log("Received password:", pass);

    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");
    const admin = await db.collection("admin").findOne({ email });

    if (!admin) {
      console.log("No admin found with this email.");
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    console.log("Admin found:", admin);

    const isMatch = pass === admin.pass; // (একই বিহেভিয়ার রাখা হয়েছে)

    if (!isMatch) {
      console.log("Password mismatch.");
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
