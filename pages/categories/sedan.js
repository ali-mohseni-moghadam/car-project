import React from "react";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

const Sedan = () => {
  const sedanCars = carsData.filter((car) => car.category === "sedan");
  return <CarsList data={sedanCars} />;
};

export default Sedan;
