import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { AppInit } from "./app/init/AppInit";
import { store } from "./app/store/store";
import { router } from "./app/router/router";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppInit />
    <RouterProvider router={router} />
  </Provider>
);
