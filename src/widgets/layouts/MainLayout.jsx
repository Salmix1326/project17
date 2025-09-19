import { Outlet } from "react-router";
import { Header } from "../Header";

export function MainLayout() {
  return (
    <>
      <Header />
      <main style={{height:"100vh"}}>
        <Outlet />
      </main>
    </>
  );
}
