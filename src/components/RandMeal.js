import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import FoodAndRandContent from "./FoodAndRandContent";

const RandMeal = (props) => {
  const randUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const [foods, setFoods] = useState("");

  const fetchRandMeal = async () => {
    const response = await fetch(randUrl);
    const res = await response.json();
    setFoods(res.meals[0]);
  };

  useEffect(() => {
    fetchRandMeal();
  }, []);

  if (foods === "undefined" || foods === "" || !foods) {
    return <Loading />;
  }

  return <FoodAndRandContent foods={foods} />;
};

export default RandMeal;
