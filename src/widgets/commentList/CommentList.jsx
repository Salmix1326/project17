import { useGetCommentsByPostQuery } from "@/entities/post/comments/api/commentsApi";
import { CommentItem } from "@/entities/post/comments/ui/CommentsItem";

export function CommentList({ postId }) {
  const { data, isLoading, error } = useGetCommentsByPostQuery({ postId });

  if (isLoading)
    return (
      <div className="text-yellow-400 text-center mt-2">
        Loading comments...
      </div>
    );
  if (error)
    return (
      <div className="text-red-500 text-center mt-2">
        Error: {error.toString()}
      </div>
    );

  const comments = data || [];

  return (
    <div className="mt-4 space-y-2">
      <h4 className="text-yellow-400 font-bold mb-2 text-lg">Comments</h4>
      <div className="bg-black border-2 border-yellow-400 rounded-xl p-2 space-y-2">
        {comments.map((c) => (
          <CommentItem key={c.id} comment={c} />
        ))}
      </div>
    </div>
  );
}
