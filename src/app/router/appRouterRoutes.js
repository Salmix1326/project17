import { frontRoutes } from "@/shared/config/routes/frontRoutes";

const pagesList = Object.keys(frontRoutes.pages);
const pages = import.meta.glob("/src/pages/*.jsx");

export const appRouterRoutes = pagesList.map((page) => ({
  ...frontRoutes.pages[page],
  lazy: async () => {
    const key = `/src/pages/${page}.jsx`;
    if (!pages[key]) {
      throw new Error(`Page not found: ${key}`);
    }
    const mod = await pages[key]();
    return { Component: mod.default };
  },
}));
