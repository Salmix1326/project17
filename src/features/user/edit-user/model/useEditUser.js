import { useUpdateUserMutation } from "@/entities/user/api/userApi";

export function useEditUser() {
  const [updateUser, { isLoading, error }] = useUpdateUserMutation();

  async function editUser(id, data) {
    try {
      const result = await updateUser({ id, ...data }).unwrap();
      console.log("User edited:", result);
      return result;
    } catch (err) {
      console.error("Failed to edit user:", err);
      throw err;
    }
  }

  return { editUser, isLoading, error };
}