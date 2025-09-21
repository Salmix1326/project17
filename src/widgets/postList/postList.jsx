import { useState } from "react";
import {
  useGetPostsQuery,
  useDeletePostMutation,
} from "@/entities/post/api/postApi";
import { PostCard } from "@/entities/post/ui/PostCard";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";
import { roles } from "@/shared/config/roles";
import PostEditModal from "@/features/post/editingPost/ui/PostEditModal";

function PostList() {
  const user = useSelector(selectAuthUser);
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading, error } = useGetPostsQuery({ page, limit });
  const [deletePost] = useDeletePostMutation();
  const [editingPost, setEditingPost] = useState(null);

  if (isLoading)
    return (
      <div className="text-yellow-400 text-center mt-6">Loading posts...</div>
    );
  if (error)
    return (
      <div className="text-red-500 text-center mt-6">
        Error: {error.toString()}
      </div>
    );

  const posts = data.items || [];
  const totalPages = data?.totalPages || 1;

  const onEdit = (post) => setEditingPost(post);

  const onDelete = async (id) => {
    await deletePost(id);
    if (posts.length === 1) setPage((p) => Math.max(p - 1, 1));
  };

  return (
    <div className="space-y-6">
      {(user?.role === roles.manager || user?.role === roles.admin) && (
        <div className="text-right mb-4">
          <button
            onClick={() => setEditingPost({})}
            className="cursor-pointer px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            Add New Post
          </button>
        </div>
      )}

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="cursor-pointer px-3 py-1 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black disabled:opacity-50 transition-colors duration-300"
        >
          Prev
        </button>
        <span className="text-yellow-400">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="cursor-pointer px-3 py-1 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black disabled:opacity-50 transition-colors duration-300"
        >
          Next
        </button>
      </div>

      {/* Post Edit Modal */}
      {editingPost !== null && (
        <PostEditModal
          post={editingPost}
          onClose={() => setEditingPost(null)}
        />
      )}
    </div>
  );
}

export default PostList;
