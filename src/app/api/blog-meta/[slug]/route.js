import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const slug = await params?.slug;

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("VBA-laboiteautomatique-DB");

  // 1. Get number of comments
  const commentCount = await db
    .collection("comments")
    .countDocuments({ pageSlug: slug });

  // 2. Get view count (optional: can be from `views` collection or in `blogs` collection)
  const blogViewDoc = await db.collection("blogViews").findOne({ slug });

  const views = blogViewDoc?.count || 0;

  return NextResponse.json({ slug, views, comments: commentCount });
}
