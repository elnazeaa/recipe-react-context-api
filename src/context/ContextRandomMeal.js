import React, { createContext, useReducer } from "react";
import randMealReducer from "../reducer/randMealReducer";

export const ContexRandomMeal = createContext();

const ContextRandMealProvider = (props) => {
  const initialState = {
    randMeal: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(randMealReducer, initialState);

  //Fetch Rand Meal
  const fetchRandMeal = async () => {
    dispatch({ type: "LOADING" });
    const randMeal = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const response = await fetch(randMeal);
    const res = await response.json();
    dispatch({ type: "GET_RAND_MEAL", payload: res.meals });
  };

  const handleRandomFood = () => {
    fetchRandMeal();
  };

  return (
    <ContexRandomMeal.Provider value={{ ...state }}>
      {props.children}
    </ContexRandomMeal.Provider>
  );
};

export default ContextRandMealProvider;
