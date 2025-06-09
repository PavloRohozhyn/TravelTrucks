import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTruck } from "../../redux/truck/selectors";

import TruckFeatures from "../TruckFeatures/TruckFeatures";
import TruckReviews from "../TruckReviews/TruckReviews";

import icons from "../../assets/sprite.svg";
import clsx from "clsx";
import css from "./TruckDetails.module.css";

const active = ({ isActive }) => {
  return clsx(css.details_link, isActive && css.active);
};

const TruckDetails = () => {
  const truck = useSelector(selectTruck);
  return (
    <>
      <h2 className={css.name_title}>{truck.name}</h2>
      <div className={css.rating_wrapper}>
        <svg className={css.icon} width="16" height="16">
          <use href={`${icons}#icon-Rating`} />
        </svg>
        <p className={css.reviews}>
          {truck.rating} ({truck.reviews ? truck.reviews.length : 0} Reviews)
        </p>
        <svg className={css.icon} width="20" height="20">
          <use href={`${icons}#Map`} />
        </svg>{" "}
        {truck.location}
      </div>
      <p className={css.name_title}>{`€ ${Number(truck.price).toFixed(2)}`}</p>

      {truck.gallery.length > 0 ? (
        <ul className={css.gallery}>
          {truck.gallery.map((item, index) => (
            <li key={index}>
              <img
                className={css.photo}
                src={item.thumb}
                alt={`Gallery image ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No images available.</p>
      )}
      <p className={css.item_description}>{truck.description}</p>

      <ul className={css.details_list}>
        <li className={css.details_item}>
          <NavLink className={active} to="features">
            Features
          </NavLink>
        </li>
        <li className={css.details_item}>
          <NavLink className={active} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="" element={<Navigate to="features" />} />
        <Route path="features" element={<TruckFeatures />}></Route>
        <Route path="reviews" element={<TruckReviews />}></Route>
      </Routes>
    </>
  );
};

export default TruckDetails;
