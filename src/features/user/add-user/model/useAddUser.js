import { useCreateUserMutation } from "@/entities/user/api/userApi";

export function useAddUser() {
  const [createUser, { isLoading, error }] = useCreateUserMutation();

  async function addUser(data) {
    try {
      const result = await createUser(data).unwrap();
      console.log("User created:", result);
      return result;
    } catch (err) {
      console.error("Failed to create user:", err);
      throw err;
    }
  }

  return { addUser, isLoading, error };
}
