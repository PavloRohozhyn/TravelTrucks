import { Helmet } from "react-helmet-async";

import TruckHomeInfo from "../../components/TruckHomeInfo/TruckHomeInfo";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TruckHomeInfo />
    </>
  );
};

export default HomePage;
