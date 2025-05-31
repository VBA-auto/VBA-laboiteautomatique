import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// GET - একেকটা slug অনুযায়ী কমেন্ট নিয়ে আসা
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("VBA-laboiteautomatique-DB"); // নিজের ডেটাবেসের নাম এখানে দাও
  const comments = await db
    .collection("comments")
    .find({ pageSlug: slug })
    .sort({ timestamp: -1 })
    .toArray();

  return NextResponse.json({ comments });
}

// POST - নতুন কমেন্ট পাঠানো
export async function POST(req) {
  const body = await req.json();
  const { pageSlug, author, email, text } = body;

  if (!author || !email || !text || !pageSlug) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("VBA-laboiteautomatique-DB");
  const newComment = {
    pageSlug,
    author,
    email,
    text,
    timestamp: new Date(),
    likes: 0,
  };

  await db.collection("comments").insertOne(newComment);
  return NextResponse.json({ comment: newComment });
}
