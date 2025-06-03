// app/api/likeDislike/route.js
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { commentId, userEmail, action } = await req.json();

  // Validation
  if (!commentId || !userEmail || !action) {
    return NextResponse.json(
      { error: "commentId, userEmail and action are required" },
      { status: 400 }
    );
  }

  if (!["like", "dislike", "remove"].includes(action)) {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("VBA-laboiteautomatique-DB");

  try {
    // 1. Find the comment first
    const comment = await db.collection("comments").findOne({ _id: commentId });
    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    // 2. Prepare update operations
    const updateOperations = {};
    const likesArray = comment.likes || [];
    const dislikesArray = comment.dislikes || [];

    // Remove user from opposite array first
    if (action === "like") {
      updateOperations.$pull = { dislikes: userEmail };
      updateOperations.$addToSet = { likes: userEmail };
    } else if (action === "dislike") {
      updateOperations.$pull = { likes: userEmail };
      updateOperations.$addToSet = { dislikes: userEmail };
    } else if (action === "remove") {
      updateOperations.$pull = { likes: userEmail, dislikes: userEmail };
    }

    // 3. Update the comment
    const result = await db
      .collection("comments")
      .updateOne({ _id: commentId }, updateOperations);

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: false, message: "No changes made" });
    }

    // 4. Get updated counts
    const updatedComment = await db
      .collection("comments")
      .findOne({ _id: commentId });

    return NextResponse.json({
      success: true,
      likes: updatedComment.likes?.length || 0,
      dislikes: updatedComment.dislikes?.length || 0,
      userAction: action === "remove" ? null : action,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update reaction", details: error.message },
      { status: 500 }
    );
  }
}
