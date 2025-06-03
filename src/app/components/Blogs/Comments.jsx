"use client";
import React, { useEffect, useState } from "react";
import {
  FaRegUserCircle,
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaCommentDots,
} from "react-icons/fa";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  // Add new state for tracking user reactions
  const [userReactions, setUserReactions] = useState({});

  useEffect(() => {
    // localStorage বাদ দেওয়া হয়েছে
    // const savedName = localStorage.getItem("commentAuthor");
    // const savedEmail = localStorage.getItem("commentEmail");
    // if (savedName) setAuthor(savedName);
    // if (savedEmail) setEmail(savedEmail);

    fetch(`/api/comments?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments || []);
        setLoading(false);
      });
  }, [slug]);

  const handlePostComment = async (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    if (!author || !email) {
      setShowModal(true);
      return;
    }

    const commentData = {
      pageSlug: slug,
      author,
      email,
      text: newComment,
    };

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    });

    const data = await res.json();
    if (data.comment) {
      setComments([data.comment, ...comments]);
      setNewComment("");
    }
  };

  const handleSaveUserInfo = () => {
    if (!author || !email) return;
    // localStorage.setItem("commentAuthor", author);
    // localStorage.setItem("commentEmail", email);
    setShowModal(false);
    handlePostComment({ preventDefault: () => {} });
  };

  // Function to handle like/dislike toggle
  const handleReaction = async (commentId, reactionType) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment._id === commentId) {
          const currentReaction = userReactions[commentId];
          let newLikes = comment.likes || 0;
          let newDislikes = comment.dislikes || 0;

          // Case 1: User is clicking the same reaction again (remove reaction)
          if (currentReaction === reactionType) {
            if (reactionType === "like") newLikes--;
            else newDislikes--;
            return {
              ...comment,
              likes: newLikes,
              dislikes: newDislikes,
            };
          }

          // Case 2: User is switching between reactions
          if (currentReaction) {
            // Remove previous reaction
            if (currentReaction === "like") newLikes--;
            else newDislikes--;
          }

          // Add new reaction
          if (reactionType === "like") newLikes++;
          else newDislikes++;

          return {
            ...comment,
            likes: newLikes,
            dislikes: newDislikes,
          };
        }
        return comment;
      })
    );

    // Update user's reaction state
    setUserReactions((prev) => {
      const currentReaction = prev[commentId];

      // If clicking same reaction again, remove it
      if (currentReaction === reactionType) {
        const newReactions = { ...prev };
        delete newReactions[commentId];
        return newReactions;
      }

      // Otherwise set the new reaction
      return { ...prev, [commentId]: reactionType };
    });
  };

  return (
    <div className="bg-white font-Poppins w-full sticky top-30">
      <h2 className="text-xl text-gray-700 text-start font-medium">
        Conversation ({comments.length})
      </h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        Commencez ici la discussion. Postez avec courtoisie.
      </p>

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
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm self-start mt-1"
        >
          Envoyer
        </button>
      </form>

      {loading ? (
        <div className="flex justify-center py-6">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-6 h-[400px] overflow-y-scroll">
          {comments.map((comment) => (
            <div key={comment._id} className="flex items-start space-x-3">
              <FaRegUserCircle
                size={36}
                className="text-gray-400 rounded-full"
              />
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-0.5">
                  <span className="font-semibold text-sm text-gray-800">
                    {comment.author}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(comment.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {comment.text}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <button
                    onClick={() => handleReaction(comment._id, "like")}
                    className={`flex items-center ${
                      userReactions[comment._id] === "like"
                        ? "text-blue-500"
                        : "hover:text-blue-500 text-gray-500"
                    }`}
                  >
                    <FaThumbsUp className="mr-1" /> {comment.likes || 0}
                  </button>
                  <button
                    onClick={() => handleReaction(comment._id, "dislike")}
                    className={`flex items-center ${
                      userReactions[comment._id] === "dislike"
                        ? "text-red-500"
                        : "hover:text-red-500 text-gray-500"
                    }`}
                  >
                    <FaThumbsDown className="mr-1" /> {comment.dislikes || 0}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] md:w-[400px]">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Qui êtes-vous ?
            </h3>
            <input
              type="text"
              placeholder="Votre nom"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full mb-3 p-2 border rounded bg-white"
            />
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-2 border rounded bg-white"
            />
            <button
              onClick={handleSaveUserInfo}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Sauvegarder et commenter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
