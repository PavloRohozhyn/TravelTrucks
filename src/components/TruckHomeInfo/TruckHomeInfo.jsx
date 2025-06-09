import { Link } from "react-router-dom";

import css from "./TruckHomeInfo.module.css";

const TruckHomeInfo = () => {
  return (
    <section className={css.TrackHomeInfoContainer}>
      <div className={css.TrackHomeInfoWrapper}>
        <h1 className={css.TrackHomeInfoTitle}>Campers of your dreams</h1>
        <p className={css.TrackHomeInfoDesc}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button type="button" className={css.TrackHomeInfoBtn}>
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TruckHomeInfo;
