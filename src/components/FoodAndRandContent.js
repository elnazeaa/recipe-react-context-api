import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FoodAndRandContent = ({ foods }) => {
  // //Extract measures with all undefined and inCorrect values
  const { strArea, strCategory, strMeal, strMealThumb, strInstructions } =
    foods;

  let measures = [];
  for (let i = 0; i <= 20; i++) {
    measures.push(
      foods[`strIngredient${i}`] + "  -  " + foods[`strMeasure${i}`]
    );
  }
  // console.log(measures);
  // //extract Correct Measures
  let correctMeasuers = measures.filter((item) => {
    if (
      item === "undefined-undefined" ||
      item === "-" ||
      item === "undefined  -  undefined" ||
      item === "  -  " ||
      item === "  -   " ||
      item === "null  -  null"
    ) {
      return false;
    }
    return item;
  });
  return (
    <Wrapper className="container">
      <div className="img">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="content">
        <h2 className="title">Name : {strMeal}</h2>
        <h3 className="category">Category : {strCategory}</h3>
        <h3 className="area">Area: {strArea}</h3>
        <p className="instruction">{strInstructions}</p>
        <h3 className="ingre">Ingredient</h3>
        <ul>
          {correctMeasuers.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <Link className="home" to="/recipe-react-context-api">
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
    align-items: center;
    justify-content: center;
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

export default FoodAndRandContent;
