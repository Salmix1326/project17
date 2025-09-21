import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import HomePage from "@/pages/HomePage.jsx";
import LoginPage from "@/pages/LoginPage.jsx";
import UsersPage from "@/pages/UsersPage.jsx";
import PostsPage from "@/pages/PostsPage.jsx";
import NotFoundPage from "@/pages/NotFoundPage.jsx";
import ForbiddenPage from "@/pages/ForbiddenPage.jsx";
import GlobalErrorPage from "@/pages/GlobalErrorPage.jsx";

export const appRouterRoutes = [
  {
    ...frontRoutes.pages.HomePage,
    Component: HomePage,
  },
  {
    ...frontRoutes.pages.LoginPage,
    Component: LoginPage,
  },
  {
    ...frontRoutes.pages.UsersPage,
    Component: UsersPage,
  },
  {
    ...frontRoutes.pages.PostsPage,
    Component: PostsPage,
  },
  {
    ...frontRoutes.pages.NotFoundPage,
    Component: NotFoundPage,
  },
  {
    ...frontRoutes.pages.ForbiddenPage,
    Component: ForbiddenPage,
  },
  {
    ...frontRoutes.pages.GlobalErrorPage,
    Component: GlobalErrorPage,
  },
];
