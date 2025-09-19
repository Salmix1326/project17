import { useCreateCommentMutation } from "@/entities/post/comments/api/commentsApi";
import { useState } from "react";

export function CommentForm({ postId }) {
  const [content, setContent] = useState("");
  const [createComment, { isLoading }] = useCreateCommentMutation();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    await createComment({ postId, text: content });
    setContent("");
  };

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-2">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
        placeholder="Write a comment..."
        required
        className="w-full p-3 rounded-lg bg-black text-yellow-300 placeholder-yellow-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="cursor-pointer px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500 disabled:opacity-50 transition-colors duration-300"
      >
        Add Comment
      </button>
    </form>
  );
}
