// @ts-nocheck
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation"
import MainFooter from "../components/navigation/MainFooter"

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
}
