import { useDeleteUserMutation } from "@/entities/user/api/userApi";

export function useDeleteUser() {
  const [deleteUserMutation, { isLoading, error }] = useDeleteUserMutation();

  async function deleteUser(id) {
    try {
      const result = await deleteUserMutation(id).unwrap();
      console.log("User deleted:", result);
      return result;
    } catch (err) {
      console.error("Failed to delete user:", err);
      throw err;
    }
  }

  return { deleteUser, isLoading, error };
}
