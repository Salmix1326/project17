import DeleteUserButton from "@/features/user/delete-user/ui/DeleteUserButton";
import EditUserButton from "@/features/user/edit-user/ui/EditUserButton";

export function UserListItem({ user }) {
  return (
    <div className="flex justify-between items-center bg-yellow-200 border border-yellow-400 p-4 rounded-2xl shadow-sm gap-6 hover:shadow-md transition">
      <div className="flex-1 text-center text-black font-medium flex justify-center items-center">
        <div className="flex-1 text-center text-black font-medium">
          {user.name}
        </div>
        <div className="flex-1 text-center text-black font-medium">
          {user.email}
        </div>
        <div className="flex-1 text-center text-black font-medium">
          {user.role}
        </div>
      </div>
      <div className="flex justify-end gap-5 flex-1 flex-row text-center text-black font-medium">
        <EditUserButton userId={user.id} />
        <DeleteUserButton userId={user.id} />
      </div>
    </div>
  );
}
