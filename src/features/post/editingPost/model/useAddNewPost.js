import { useCreatePostMutation } from "@/entities/post/api/postApi";

export function useAddNewPost() {
  const [createPost, { isLoading, error }] = useCreatePostMutation();

  async function addPost(data) {
    try {
      const result = await createPost(data).unwrap();
      console.log("Post created:", result);
      return result;
    } catch (err) {
      console.error("Failed to create post:", err);
      throw err;
    }
  }

  return { addPost, isLoading, error };
}
