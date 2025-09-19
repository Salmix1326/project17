import { useState } from "react";
import { roles } from "@/shared/config/roles";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";
import { CommentList } from "@/widgets/commentList/CommentList";
import { CommentForm } from "@/features/comment/ui/CommentForm";

export function PostCard({ post, onEdit, onDelete }) {
  const [showComments, setShowComments] = useState(false);
  const user = useSelector(selectAuthUser);

  const canEditOrDelete =
    user?.role === roles.admin ||
    (user?.role === roles.manager &&
      (post.authorId?.toString() || post.author?.id?.toString()) ===
        user.id.toString());

  return (
    <div className="bg-black border-2 border-yellow-400 rounded-xl p-6 mb-6 shadow-md">
      <h3 className="text-yellow-400 text-2xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-200 mb-2">{post.body}</p>
      <div className="text-gray-400 text-sm mb-4">
        Author: <span className="text-yellow-300">{post.author?.name}</span>
      </div>

      {canEditOrDelete && (
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => onEdit(post)}
            className="px-3 py-1 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(post.id)}
            className="px-3 py-1 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors duration-300"
          >
            Delete
          </button>
        </div>
      )}

      <button
        onClick={() => setShowComments((v) => !v)}
        className="px-3 py-1 rounded-lg border border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-500 hover:text-black transition-colors duration-300 mb-4"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && (
        <div className="mt-4 space-y-4">
          <CommentList postId={post.id} />
          {user && <CommentForm postId={post.id} />}
        </div>
      )}
    </div>
  );
}
