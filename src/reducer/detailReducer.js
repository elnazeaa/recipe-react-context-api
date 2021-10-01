const detailReducer = (state, action) => {
  if (action.type === "GET_ID") {
    return { ...state, mealId: action.payload };
  }
  if (action.payload === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "GET_FOOD_RES") {
    return { ...state, foodRes: action.payload, loading: false };
  }
  return state;
};

export default detailReducer;
