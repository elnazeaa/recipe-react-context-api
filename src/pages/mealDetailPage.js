import React, { useContext } from "react";
import { FoodRes, Loading } from "../components";
import { ContextDetailId } from "../context/ContextDetailId";

const MealDetailPage = (props) => {
  const { loading } = useContext(ContextDetailId);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <FoodRes />
    </>
  );
};

export default MealDetailPage;
