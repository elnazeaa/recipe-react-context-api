import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContextDetailId } from "../context/ContextDetailId";

const Meal = ({ meal }) => {
  // const { handleClickId } = useContext(ContextDetailId);

  return (
    <Wrapper className="container">
      <div className="imgCont">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="content">
        <p className="title">{meal.strMeal}</p>
        <p className="recepi">{meal.strInstructions.slice(0, 200)} ...</p>
        <Link className="detail" to={`/detail/${meal.idMeal}`}>
          Detail
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 20.57rem;
  height: auto;
  background: #fff;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 4px;

  .imgCont {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCont img {
    width: 20rem;
    height: auto;
    border-radius: 2px;
  }

  .content {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 12rem;
  }

  .title {
    font-size: 1.3rem;
    color: #e65500;
    margin-bottom: 5px;
  }

  .detail {
    width: 6rem;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    font-size: 1rem;
    margin: 1rem 0 0 0;
    background: #e65500;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    text-align: center;
  }
  .detail:focus {
    color: #565656;
  }
`;

export default Meal;
