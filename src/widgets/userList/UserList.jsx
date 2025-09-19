import React, { useState } from "react";
import { useGetUsersQuery } from "../../entities/user/api/userApi";
import { UserListItem } from "../../entities/user/ui/UserListItem";
import AddUserButton from "@/features/user/add-user/ui/AddUserButton";


export function UserList() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading, error } = useGetUsersQuery({ page, limit });

  if (isLoading) return <div>Завантаження...</div>;
  if (error) return <div>Помилка: {error.toString()}</div>;

  const users = data?.items || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div className="p-4">
      <div className="mb-5">
        <AddUserButton />
      </div>
      <div className="space-y-2">
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Prev
        </button>

        <span className="text-yellow-300 font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
