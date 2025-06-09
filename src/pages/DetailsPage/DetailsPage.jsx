import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchTruckDetails } from "../../redux/truck/operations";
import TruckDetails from "../../components/TruckDetails/TruckDetails";

import { Toaster } from "react-hot-toast";

import css from "./DetailsPage.module.css";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTruckDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      <section className={css.detailed_container}>
        <TruckDetails />
      </section>
    </>
  );
};

export default DetailsPage;
