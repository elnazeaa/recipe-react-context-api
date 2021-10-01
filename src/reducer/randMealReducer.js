const randMealReducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "GET_RAND_MEAL") {
    return { ...state, randMeal: action.payload, loading: false };
  }
  return state;
};

export default randMealReducer;
