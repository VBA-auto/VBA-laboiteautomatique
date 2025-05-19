// components/ConversationSection.js
"use client";
import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaRegUserCircle,
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaCommentDots,
  FaApple,
} from "react-icons/fa";
import { GiWatermelon } from "react-icons/gi";

const mockComments = [
  {
    id: 1,
    author: "DARING DRINK",
    text: "No thank you, but at least it is not as stupid as the wavy eyebrow trend.",
    timestamp: "4h",
    likes: 1,
    avatar: null, // null হলে FaRegUserCircle ব্যবহৃত হবে
  },
  {
    id: 2,
    author: "STRONG WATERMELON",
    text: "I like",
    timestamp: "9h",
    likes: 2,
    avatar: true,
  },
];

// কালারড সার্কেল আইকনগুলোর জন্য (ছবিতে থাকা)
const moodIcons = [
  "bg-blue-400",
  "bg-green-400",
  "bg-red-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-indigo-400",
  "bg-gray-400",
];

const Comments = () => {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState("");

  const handlePostComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    const newCommentObj = {
      id: Date.now(),
      author: "Current User", // এটি অথেন্টিকেশন থেকে আসবে
      text: newComment,
      timestamp: "Just now",
      likes: 0,
      avatar: null,
    };
    setComments([newCommentObj, ...comments]);
    setNewComment("");
  };

  return (
    <div className=" bg-white font-Poppins md:w-full">
      {/* Title and Subtitle */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Conversation ({comments.length})
      </h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        Commencez ici la discussion. Postez avec courtoisie.
      </p>

      {/* Comment Input Area */}
      <form
        onSubmit={handlePostComment}
        className="flex items-start space-x-3 mb-8"
      >
        <FaRegUserCircle
          size={36}
          className="text-gray-400 mt-1 border-2 border-blue-500 rounded-full"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire"
          className="flex-grow p-2.5 border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-sm"
          rows="3"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm self-start mt-1"
        >
          Envoyer
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            {comment.avatar ? (
              <GiWatermelon
                size={36}
                className="text-gray-400 border-2 border-blue-500 rounded-full"
              />
            ) : (
              <FaRegUserCircle
                size={36}
                className="text-gray-400 border-2 border-blue-500 rounded-full"
              />
            )}
            <div className="flex-grow">
              <div className="flex items-center space-x-2 mb-0.5">
                <span className="font-semibold text-sm text-gray-800">
                  {comment.author}
                </span>
                <span className="text-xs text-gray-400">
                  {comment.timestamp}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {comment.text}
              </p>
              <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                <button className="hover:text-blue-500 flex items-center">
                  <FaCommentDots className="mr-1" /> Répondre
                </button>
                <button className="hover:text-blue-500 flex items-center">
                  <FaShare className="mr-1" /> Partager
                </button>
                <button className="hover:text-blue-500 flex items-center">
                  <FaThumbsUp className="mr-1" /> {comment.likes}
                </button>
                <button className="hover:text-red-500 flex items-center">
                  <FaThumbsDown className="mr-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
