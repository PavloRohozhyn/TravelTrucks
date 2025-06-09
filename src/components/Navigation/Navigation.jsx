import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const active = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={active}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={active}>
          Catalog
        </NavLink>
        <NavLink to="/favourites" className={active}>
          Favourites
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
