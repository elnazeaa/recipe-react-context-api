import React, { createContext, useEffect, useReducer } from "react";
import searchReducer from "../reducer/reducer";

export const ContextApi = createContext();

const ContextApiProvider = (props) => {
  const searchByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  const initalState = {
    allMeals: [],
    searchQuery: "",
    categories: [],
    mealName: "",
    mealAfterSubmit: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(searchReducer, initalState);

  //Get meal Name by onChange
  const handleInputQueryOnChange = (foodName) => {
    dispatch({ type: "GET_INPUT_VAL_FOOD", payload: foodName });
  };

  //get meal Name After Submit Form
  const getInputValAfterSubmit = (mealName) => {
    dispatch({ type: "GET_MEAL_NAME_AFTER_SUBMIT", payload: mealName });
  };

  // useEffect for fetch Foods
  useEffect(() => {
    fetchMealsByName();
  }, [state.mealAfterSubmit]);

  //Fetch Meals By Name
  const fetchMealsByName = async () => {
    const searchItem = `${searchByName}${state.mealAfterSubmit}`;
    try {
      dispatch({ type: "LOADER" });
      const response = await fetch(searchItem);
      const res = await response.json();
      dispatch({ type: "GET_MEALS", payload: res });
    } catch (error) {}
  };

  return (
    <ContextApi.Provider
      value={{ ...state, handleInputQueryOnChange, getInputValAfterSubmit }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextApiProvider;
