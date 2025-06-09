import Navigation from "../Navigation/Navigation";
import TruckLogo from "../TruckLogo/TruckLogo";
import { Outlet } from "react-router-dom";

import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <TruckLogo />
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
