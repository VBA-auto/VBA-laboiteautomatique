"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { FaRegUserCircle, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

/**
 * Full Comments component with working nested replies and reply modal.
 * Fixes:
 *  - Reply form validates replyText instead of newComment
 *  - Passes replyText / setReplyText down the recursive tree
 *  - Clears replyText on Cancel / after successful submit
 *  - Minor UX & safety tweaks
 */

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyText, setReplyText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Track user reactions (client-only)
  const [userReactions, setUserReactions] = useState({});

  // Reply targets
  const [replyingToCommentId, setReplyingToCommentId] = useState(null);
  const [replyingToAuthor, setReplyingToAuthor] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");

    fetch(`/api/comments?slug=${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch comments");
        return res.json();
      })
      .then((data) => {
        if (!active) return;
        const commentTree = buildCommentTree(data.comments || []);
        setComments(commentTree);
        setLoading(false);
      })
      .catch((e) => {
        if (!active) return;
        setError(e.message || "Unable to load comments");
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  const refetchComments = useCallback(() => {
    setLoading(true);
    setError("");
    fetch(`/api/comments?slug=${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch comments");
        return res.json();
      })
      .then((data) => {
        const commentTree = buildCommentTree(data.comments || []);
        setComments(commentTree);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message || "Unable to load comments");
        setLoading(false);
      });
  }, [slug]);

  const handlePostComment = async (commentText, isReply = false) => {
    const text = (commentText || "").trim();
    if (!text) return;

    if (!author || !email) {
      setShowModal(true);
      return;
    }

    const commentData = {
      pageSlug: slug,
      author,
      email,
      text,
      ...(isReply && replyingToCommentId && { parentId: replyingToCommentId }),
    };

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentData),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Failed to post comment");

      if (data.comment) {
        // Always re-fetch to rebuild the tree accurately
        refetchComments();

        if (isReply) {
          setReplyText("");
          setReplyingToCommentId(null);
          setReplyingToAuthor(null);
        } else {
          setNewComment("");
        }
      }
    } catch (e) {
      setError(e.message || "Failed to post comment");
    }
  };

  const handleSaveUserInfo = () => {
    if (!author || !email) return;
    setShowModal(false);

    // Determine which text to use based on whether we are replying
    const textToSubmit = replyingToCommentId ? replyText : newComment;
    const isReplySubmission = !!replyingToCommentId;
    handlePostComment(textToSubmit, isReplySubmission);
  };

  const handleReaction = async (commentId, reactionType) => {
    // Optimistic update (local-only)
    setComments((prev) =>
      prev.map((c) => {
        if (c._id === commentId) {
          const currentReaction = userReactions[commentId];
          let newLikes = c.likes || 0;
          let newDislikes = c.dislikes || 0;

          if (currentReaction === reactionType) {
            // Remove reaction
            if (reactionType === "like") newLikes--;
            else newDislikes--;
          } else {
            // Switch or set reaction
            if (currentReaction === "like") newLikes--;
            else if (currentReaction === "dislike") newDislikes--;

            if (reactionType === "like") newLikes++;
            else newDislikes++;
          }

          return { ...c, likes: newLikes, dislikes: newDislikes };
        }
        return c;
      })
    );

    setUserReactions((prev) => {
      const current = prev[commentId];
      if (current === reactionType) {
        const copy = { ...prev };
        delete copy[commentId];
        return copy;
      }
      return { ...prev, [commentId]: reactionType };
    });

    // TODO: Optionally persist reaction server-side
  };

  const conversationCount = useMemo(() => comments.length, [comments]);

  return (
    <div className="bg-white font-Poppins w-full sticky top-30">
      <h2 className="text-xl text-gray-700 text-start font-medium">
        Conversation ({conversationCount})
      </h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        Commencez ici la discussion. Postez avec courtoisie.
      </p>

      {/* New top-level comment form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePostComment(newComment, false);
        }}
        className="flex items-start space-x-3 mb-8"
      >
        <FaRegUserCircle
          size={36}
          className="text-gray-400 mt-1 border-2 border-blue-500 rounded-full"
          aria-hidden
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire"
          className="flex-grow p-2.5 border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-sm"
          rows={3}
          aria-label="Ajouter un commentaire"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm self-start mt-1 disabled:opacity-50"
          disabled={!newComment.trim()}
        >
          Envoyer
        </button>
      </form>

      {error && (
        <div className="text-sm text-red-600 mb-4" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-6">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-6 h-[400px] overflow-y-scroll pr-2">
          {comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              handleReaction={handleReaction}
              userReactions={userReactions}
              setReplyingToCommentId={setReplyingToCommentId}
              setReplyingToAuthor={setReplyingToAuthor}
              setNewComment={setNewComment}
              replyingToCommentId={replyingToCommentId}
              replyingToAuthor={replyingToAuthor}
              newComment={newComment}
              replyText={replyText}
              setReplyText={setReplyText}
              handlePostComment={handlePostComment}
              author={author}
              email={email}
              setShowModal={setShowModal}
            />
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
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
              disabled={!author.trim() || !email.trim()}
            >
              Sauvegarder et commenter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const CommentItem = ({
  comment,
  handleReaction,
  userReactions,
  setReplyingToCommentId,
  setReplyingToAuthor,
  setNewComment,
  replyingToCommentId,
  replyingToAuthor,
  newComment,
  replyText,
  setReplyText,
  handlePostComment,
  author,
  email,
  setShowModal,
}) => {
  const isReplyingHere = replyingToCommentId === comment._id;
  const dt = useMemo(() => new Date(comment.timestamp), [comment.timestamp]);

  return (
    <div className="flex items-start space-x-0">
      <div>
        <FaRegUserCircle
          size={20}
          className="text-gray-400 rounded-full"
          aria-hidden
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center space-x-2 mb-0.5">
          <span className="font-semibold text-sm text-gray-800">
            {comment.author}
          </span>
          <span className="text-xs text-gray-400" title={dt.toISOString()}>
            {dt.toLocaleString()}
          </span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          {comment.parentAuthor && (
            <>
              <span className="text-blue-500 font-semibold">
                #{comment.parentAuthor}
              </span>{" "}
            </>
          )}
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
            aria-label="Like"
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
            aria-label="Dislike"
          >
            <FaThumbsDown className="mr-1" /> {comment.dislikes || 0}
          </button>
          <button
            onClick={() => {
              setReplyingToCommentId(comment._id);
              setReplyingToAuthor(comment.author);
              setNewComment("");
            }}
            className="flex items-center hover:text-blue-500 text-gray-500"
          >
            Reply
          </button>
        </div>

        {/* Inline reply box */}
        {isReplyingHere && (
          <div className="mt-4 pl-2">
            <p className="text-sm text-gray-600 mb-2">
              Replying to{" "}
              <span className="font-semibold">{replyingToAuthor}</span>
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!replyText.trim()) return;
                if (!author || !email) {
                  setShowModal(true);
                  return;
                }
                handlePostComment(replyText, true);
              }}
              className="flex items-start space-x-3"
            >
              <div>
                <FaRegUserCircle
                  size={20}
                  className="text-gray-400 mt-1 border-2 border-blue-500 rounded-full"
                  aria-hidden
                />
              </div>
              <div className="w-full">
                <div className="pe-2">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Add your reply"
                    className="w-full p-2.5 border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-sm"
                    rows={2}
                    aria-label="Add your reply"
                  />
                </div>
                <div className="mt-2 space-x-2">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-xs disabled:opacity-50"
                    disabled={!replyText.trim()}
                  >
                    Reply
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setReplyingToCommentId(null);
                      setReplyingToAuthor(null);
                      setNewComment("");
                      setReplyText("");
                    }}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Render children */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-4 pl-2 border-l border-gray-200">
            {comment.replies.map((reply) => (
              <CommentItem
                key={reply._id}
                comment={reply}
                handleReaction={handleReaction}
                userReactions={userReactions}
                setReplyingToCommentId={setReplyingToCommentId}
                setReplyingToAuthor={setReplyingToAuthor}
                setNewComment={setNewComment}
                replyingToCommentId={replyingToCommentId}
                replyingToAuthor={replyingToAuthor}
                newComment={newComment}
                replyText={replyText}
                setReplyText={setReplyText}
                handlePostComment={handlePostComment}
                author={author}
                email={email}
                setShowModal={setShowModal}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- helpers ---
function buildCommentTree(comments) {
  const map = {};
  const roots = [];

  (comments || []).forEach((c) => {
    map[c._id] = { ...c, replies: [] };
  });

  (comments || []).forEach((c) => {
    if (c.parentId && map[c.parentId]) {
      map[c._id].parentAuthor = map[c.parentId].author;
      map[c.parentId].replies.push(map[c._id]);
    } else {
      roots.push(map[c._id]);
    }
  });

  // Newest first
  roots.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  roots.forEach((c) =>
    c.replies.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  );

  return roots;
}

export default Comments;
