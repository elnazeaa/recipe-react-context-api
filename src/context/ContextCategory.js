import React, { createContext, useEffect, useReducer } from "react";
import categoryReducer from "../reducer/categoryReducer";

export const ContextCategory = createContext();

const ContextCategoryProvider = (props) => {
  const catUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  const initalState = {
    category: [],
    loading: false,
    filterResult: [],
  };

  const [state, dispatch] = useReducer(categoryReducer, initalState);

  const fetchCats = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await fetch(catUrl);
      const res = await response.json();
      dispatch({ type: "GET_CATS", payload: res.categories });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const handleCategory = (catName) => {
    fetchCategoryByNameFilter(catName);
  };

  const fetchCategoryByNameFilter = async (name) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    const res = await response.json();
    dispatch({ type: "FILTER_MEAL_BYNAME", payload: res.meals });
  };

  return (
    <ContextCategory.Provider value={{ ...state, handleCategory }}>
      {props.children}
    </ContextCategory.Provider>
  );
};

export default ContextCategoryProvider;
