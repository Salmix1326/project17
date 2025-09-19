import { useLogout } from "@/features/auth";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth/api/authSlice";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";

export function UserInfo() {
  const user = useSelector(selectAuthUser);
  const navigate = useNavigate();
  const { logoutUser } = useLogout();

  if (!user) {
    return (
      <Link
        to={frontRoutes.pages.LoginPage.navigationPath}
        className="px-3 py-1 rounded-lg font-medium text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
      >
        Log In
      </Link>
    );
  }

  const onLogout = () => {
    logoutUser();
    navigate(frontRoutes.pages.LoginPage.navigationPath);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-yellow-300 font-medium">
        {user.name} <span className="text-gray-400 text-sm">({user.role})</span>
      </span>
      <button
        onClick={onLogout}
        className="cursor-pointer px-3 py-1 rounded-lg font-medium text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
      >
        Exit
      </button>
    </div>
  );
}
