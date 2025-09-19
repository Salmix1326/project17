import React, { useState } from "react";
import { useDeleteCommentMutation } from "../api/commentsApi";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";
import { roles } from "@/shared/config/roles";

export function CommentItem({ comment }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteComment] = useDeleteCommentMutation();
  const user = useSelector(selectAuthUser);

  const canDelete =
    user?.role === roles.admin ||
    (user?.role === roles.manager &&
      (comment.authorId?.toString() || comment.author?.id?.toString()) ===
        user.id.toString()) ||
    (comment.authorId?.toString() || comment.author?.id?.toString()) ===
      user?.id.toString();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteComment(comment.id).unwrap();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-between items-center border-b border-yellow-400 py-2 px-4">
      <span className="text-gray-200">
        <b className="text-yellow-400">{comment.authorName}</b>: {comment.text}
        {isDeleting && (
          <span className="ml-2 text-gray-500 italic">Deleting...</span>
        )}
      </span>
      {canDelete && (
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="ml-4 px-3 py-1 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 disabled:opacity-50 transition-colors duration-300"
        >
          Delete
        </button>
      )}
    </div>
  );
}
