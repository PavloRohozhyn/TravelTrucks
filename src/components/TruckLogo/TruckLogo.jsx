import icons from "../../assets/sprite.svg";
import { Link } from "react-router-dom";

import css from "./TruckLogo.module.css";

const TruckLogo = () => {
  return (
    <Link to="/" className={css.TracLogo}>
      <svg width="136" height="16">
        <use href={`${icons}#Logo`} />
      </svg>
    </Link>
  );
};

export default TruckLogo;
