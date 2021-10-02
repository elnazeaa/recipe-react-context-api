import React, { useContext } from "react";
import { ContextCategory } from "../context/ContextCategory";
import FilterByCategoryItems from "./FilterByCategoryItems";

const MealByCategory = (props) => {
  const { filterResult } = useContext(ContextCategory);

  return (
    <div
      className="allMeals"
      style={{
        display: "flex",
        gap: "0px",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {filterResult.map((filterByName) => {
        return (
          <FilterByCategoryItems
            key={filterByName.idMeal}
            filterByName={filterByName}
          />
        );
      })}
    </div>
  );
};

export default MealByCategory;
