const categoryReducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "GET_CATS") {
    return { ...state, category: action.payload, loading: false };
  }
  if (action.type === "FILTER_MEAL_BYNAME") {
    return { ...state, filterResult: action.payload };
  }
  return state;
};

export default categoryReducer;
