import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import FoodAndRandContent from "./FoodAndRandContent";
import styled from "styled-components";

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

  return (
    <Wrapper>
      <button onClick={fetchRandMeal}>Click for Random Meal....</button>
      <FoodAndRandContent foods={foods} />;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    margin: 10px 0 0 0;
    background: #cccbd1;
    border: 1px solid #7c7c7c;
    padding: 10px 15px;
    font-size: 16px;
    color: #060606;
  }
`;

export default RandMeal;
