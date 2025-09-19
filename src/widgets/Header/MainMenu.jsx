import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth/api/authSlice";
import { NavLink } from "react-router";
import { getPagesObjectList } from "@/shared/config/routes/frontRoutes";

export function MainMenu() {
  const user = useSelector(selectAuthUser);

  const allowedRoutes = getPagesObjectList().filter(({ meta }) => {
    if (!meta.isInMenu) return false;
    if (!meta.requireAuth) return true;
    if (!user) return false;
    if (!meta.roles) return true;
    return meta?.roles.includes(user?.role);
  });

  return (
    <nav className="flex gap-4">
      {allowedRoutes.map(({ path, meta }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `px-3 py-1 rounded-lg font-medium transition-colors duration-300
             ${
               isActive
                 ? "bg-yellow-500 text-black"
                 : "text-yellow-400 hover:bg-yellow-500 hover:text-black"
             }`
          }
        >
          {meta.title}
        </NavLink>
      ))}
    </nav>
  );
}
