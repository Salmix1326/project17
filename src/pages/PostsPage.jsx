import { selectAuthUser } from "@/features/auth";
import PostList from "@/widgets/postList/PostList.jsx";
import { useSelector } from "react-redux";

export default function PostsPage() {
  const user = useSelector(selectAuthUser);

  return (
    <div className="p-6 bg-black min-h-screen">
      <h1 className="text-yellow-400 text-3xl font-extrabold mb-6">
        Posts List
      </h1>
      <div className="bg-black border-2 border-yellow-400 rounded-xl p-4 shadow-lg">
        <PostList user={user} />
      </div>
    </div>
  );
}
