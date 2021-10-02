import React, { createContext, useEffect, useReducer } from "react";
import detailReducer from "../reducer/detailReducer";
export const ContextDetailId = createContext();

const ContextDetailProvider = (props) => {
  const mealId = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const initialState = {
    mealId: "",
    foodRes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(detailReducer, initialState);

  const fetchByMealId = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(`${mealId}${+state.mealId}`);
    const res = await response.json();
    dispatch({ type: "GET_FOOD_RES", payload: res.meals });
  };

  const handleId = (id) => {
    dispatch({ type: "GET_ID", payload: id });
  };

  useEffect(() => {
    fetchByMealId();
  }, [state.mealId]);

  const handleFilterId = (id) => {
    console.log(id);
  };

  return (
    <ContextDetailId.Provider value={{ ...state, handleId, handleFilterId }}>
      {props.children}
    </ContextDetailId.Provider>
  );
};

export default ContextDetailProvider;
