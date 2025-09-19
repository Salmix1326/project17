import { UserList } from "@/widgets/userList/UserList";
import { roles } from "@/shared/config/roles";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";

export default function UsersPage() {
  const user = useSelector(selectAuthUser);

  if (!user || user.role !== roles.admin) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="bg-black border-2 border-yellow-400 rounded-xl p-8 max-w-md text-center shadow-lg">
          <h1 className="text-yellow-400 text-2xl font-bold mb-4">
            Access Forbidden
          </h1>
          <p className="text-gray-200">
            This page is only accessible for users with the role{" "}
            <span className="text-yellow-400 font-semibold">Admin</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-black min-h-screen">
      <h1 className="text-yellow-400 text-3xl font-extrabold mb-6">
        Users List
      </h1>
      <div className="bg-black border-2 border-yellow-400 rounded-xl p-4 shadow-lg">
        <UserList />
      </div>
    </div>
  );
}
