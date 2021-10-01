import React, { useContext, useEffect, useState } from "react";
import { ContexRandomMeal } from "../context/ContextRandomMeal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const RandMeal = (props) => {
  const randUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const [randMeal, setRandMeal] = useState("");

  const fetchRandMeal = async () => {
    const response = await fetch(randUrl);
    const res = await response.json();
    setRandMeal(res.meals[0]);
  };

  useEffect(() => {
    fetchRandMeal();
  }, []);

  //   Extract measures with all undefined and inCorrect values
  let measures = [];
  for (let i = 0; i <= 20; i++) {
    measures.push(
      randMeal[`strIngredient${i}`] + "  -  " + randMeal[`strMeasure${i}`]
    );
  }

  // extract Correct Measures
  let correctMeasuers = measures.filter((item) => {
    if (
      item === "undefined-undefined" ||
      item === "-" ||
      item === "undefined  -  undefined" ||
      item === "  -  " ||
      item === "  -   "
    ) {
      return false;
    }
    return item;
  });

  if (randMeal === "undefined" || randMeal === "" || !randMeal) {
    return <Loading />;
  }

  return (
    <Wrapper className="container">
      <button onClick={fetchRandMeal} className="rand">
        RandMeal
      </button>
      <div className="img">
        <img src={randMeal.strMealThumb} alt={randMeal.strMeal} />
      </div>
      <div className="content">
        <h2 className="title">Name : {randMeal.strMeal}</h2>
        <h3 className="category">Category : {randMeal.strCategory}</h3>
        <h3 className="area">Area: {randMeal.strArea}</h3>
        <p className="instruction">{randMeal.strInstructions}</p>
        <h3 className="ingre">Ingredient</h3>
        <ul>
          {correctMeasuers.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <Link className="home" to="/">
          back home....
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  .img img {
    width: 16vw;
    border-radius: 3px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    margin: 2rem 0 0 0;
  }
  .instruction {
    text-align: center;
    font-size: 1.2rem;
  }
  .home {
    display: block;
    background: #e65500;
    padding: 1rem;
    border-radius: 2px;
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
    color: #fff;
  }
  .rand {
    margin: 10px 0 10px 0;
    background: #cccbd1;
    padding: 10px 15px;
    border: 1px solid #9d9ca3;
    font-size: 15px;
    cursor: pointer;
  }
  h2,
  h3 {
    margin: 3px;
  }
  @media (max-width: 1400px) {
    .img img {
      width: 30vw;
    }
  }
`;

export default RandMeal;
