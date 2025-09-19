import { selectAuthUser } from "@/features/auth";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEditingPost } from "../model/useEditingPost";
import { useAddNewPost } from "../model/useAddNewPost";

function PostEditModal({ post, onClose }) {
  const user = useSelector(selectAuthUser);

  const {
    editPost,
    isLoading: editLoading,
    error: errorEditing,
  } = useEditingPost();

  const {
    addPost,
    isLoading: addLoading,
    error: errorAdding,
  } = useAddNewPost();

  const [title, setTitle] = useState(post.title || "");
  const [body, setBody] = useState(post.body || "");
  const [authorId] = useState(user.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (post.id) {
      await editPost(post.id, { title, body, authorId });
      onClose?.();
    } else {
      await addPost({ title, body, authorId });
      onClose?.();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-black border-2 border-yellow-400 rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">
          {post.id ? "Edit Post" : "Add New Post"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-yellow-300 font-medium mb-1">Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 rounded-lg bg-gray-800 text-yellow-300 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-yellow-300 font-medium mb-1">Content:</label>
            <textarea
              rows={4}
              name="content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="p-2 rounded-lg bg-gray-800 text-yellow-300 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {errorEditing && (
            <p className="text-red-500">Error: {errorEditing.message}</p>
          )}
          {errorAdding && (
            <p className="text-red-500">Error: {errorAdding.message}</p>
          )}

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="submit"
              disabled={editLoading || addLoading}
              className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500 disabled:opacity-50 transition-colors duration-300"
            >
              {editLoading && post.id
                ? "Saving changes..."
                : post.id
                ? "Save changes"
                : addLoading
                ? "Adding..."
                : "Add Post"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-500 hover:text-black transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostEditModal;
