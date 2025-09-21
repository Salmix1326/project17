import { frontRoutes } from "@/shared/config/routes/frontRoutes";

const pagesList = Object.keys(frontRoutes.pages);
const pages = import.meta.glob("../../pages/*.jsx");

export const appRouterRoutes = pagesList.map((page) => ({
  ...frontRoutes.pages[page],
  lazy: async () => {
    const mod = await pages[`../../pages/${page}.jsx`]();
    return { Component: mod.default };
  },
}));
