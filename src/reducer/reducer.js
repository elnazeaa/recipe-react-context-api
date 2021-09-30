const searchReducer = (state, action) => {
  if (action.type === "GET_INPUT_VAL_FOOD") {
    return { ...state, mealName: action.payload };
  }
  if (action.type === "GET_MEAL_NAME_AFTER_SUBMIT") {
    return { ...state, mealAfterSubmit: action.payload, mealName: "" };
  }
  if (action.type === "LOADER") {
    return { ...state, loading: true };
  }
  if (action.type === "GET_MEALS") {
    return { ...state, allMeals: action.payload.meals, loading: false };
  }
  if (action.type === "EMPTY") {
    return { ...state, allMeals: [] };
  }
  return state;
};

export default searchReducer;
