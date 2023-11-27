import { useRouter } from "next/router";
import carsData from "../../data/carsData";

import CarDetails from "../../components/templates/CarDetails";

const CarDetail = () => {
  const router = useRouter();
  const id = router.query.carId;
  const filteredData = carsData[id - 1];

  return <CarDetails {...filteredData} />;
};

export default CarDetail;
