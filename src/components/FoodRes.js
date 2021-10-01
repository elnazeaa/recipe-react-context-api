import React, { useContext, useEffect } from "react";
import { Loading } from "../components/index";
import { ContextDetailId } from "../context/ContextDetailId";
import { useParams } from "react-router-dom";
import FoodAndRandContent from "./FoodAndRandContent";

const FoodRes = (props) => {
  const { foodRes, handleId } = useContext(ContextDetailId);
  let { id } = useParams();

  useEffect(() => {
    handleId(id);
  }, [id]);

  if (foodRes === null || foodRes[0] === undefined) {
    return <Loading />;
  }

  let foods = foodRes[0];

  return <FoodAndRandContent foods={foods} />;
};

export default FoodRes;
