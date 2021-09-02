import { useEffect, useState } from "react";
import carService from "../services/CarService";

function AppCars () {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await carService.getAll();

      setCars(data);
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h3>Cars: </h3>
      {cars.map((car) => (
        <li>{car.brand}</li>
      ))};
    </div>
  )
}

export default AppCars;