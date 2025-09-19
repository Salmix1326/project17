import { useUpdatePostMutation } from "@/entities/post/api/postApi";

export function useEditingPost() {
  const [postMutation, { isLoading, error }] = useUpdatePostMutation();

  async function editPost(id, data) {
    try {
      const result = await postMutation({ id, data }).unwrap();
      console.log("Post updated:", result);
    } catch (err) {
      console.error("Failed to update post:", err);
    }
  }

  return { editPost, isLoading, error };
}
