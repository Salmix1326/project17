import { useGetUserByIdQuery } from "@/entities/user/api/userApi";
import { useDeleteUser } from "../model/useDeleteUser";

function DeleteUserButton({ userId }) {
  const { deleteUser, isLoading, error } = useDeleteUser();
  const { data } = useGetUserByIdQuery(userId, {
    skip: !userId,
  });

   const handleSubmit = async () => {
     if (!data) return;
     const confirmDelete = window.confirm(`Delete user ${data.name}?`);
     if (!confirmDelete) return;

     try {
       await deleteUser(data.id);
       alert(`User ${data.name} deleted`);
     } catch (err) {
       console.error(err);
       alert("Failed to delete user");
     }
   };

  return (
    <div>
      <button
        onClick={() => handleSubmit()}
        className="px-4 py-2 rounded-xl font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
      >
        Delete User
      </button>
    </div>
  );
}

export default DeleteUserButton;
