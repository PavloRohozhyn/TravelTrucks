import TruckItem from "../TruckItem/TruckItem";
import { useSelector } from "react-redux";
import { isLoading } from "../../redux/truck/selectors";
import Loader from "../Loader/Loader";

import css from "./TruckList.module.css";

const TruckList = ({ filteredTrucks }) => {
  const loading = useSelector(isLoading);

  if (loading) {
    return <Loader />;
  }

  if (filteredTrucks.length === 0) {
    return <p className={css.text}>There are no campers, yet</p>;
  }

  return (
    <ul className={css.list}>
      {filteredTrucks.map((item) => (
        <li className={css.list_tem} key={item.id}>
          <TruckItem truck={item} />
        </li>
      ))}
    </ul>
  );
};

export default TruckList;
