import { roles } from "../roles";

export const frontRoutes = {
  pages: {
    HomePage: {
      path: "",
      navigationPath: "/",
      meta: {
        title: "Home",
        isInMenu: true,
        requireAuth: false,
      },
    },
    LoginPage: {
      path: "login",
      navigationPath: "/login",
      meta: {
        title: "Login page",
        isInMenu: false,
        requireAuth: false,
      },
    },
    UsersPage: {
      path: "users",
      navigationPath: "/users",
      meta: {
        title: "Users page",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.admin],
      },
    },
    PostsPage: {
      path: "posts",
      navigationPath: "/posts",
      meta: {
        title: "Posts page",
        isInMenu: true,
        requireAuth: false,
      },
    },
    NotFoundPage: {
      path: "*",
      meta: {
        title: "Not Found",
        isInMenu: false,
        requireAuth: false,
      },
    },
    ForbiddenPage: {
      path: "forbidden",
      navigationPath: "/forbidden",
      meta: {
        title: "Forbidden",
        isInMenu: false,
        requireAuth: false,
      },
    },
  },
};

export function getPagesObjectList() {
  const pagesList = Object.keys(frontRoutes.pages);
  return pagesList.map((page) => frontRoutes.pages[page]);
}
