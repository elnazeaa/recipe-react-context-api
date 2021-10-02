import React, { useContext } from "react";
import { ContextCategory } from "../context/ContextCategory";
import Loading from "../components/Loading";
import CategoryItem from "./CategoryItem";

const Categories = (props) => {
  const { category, loading } = useContext(ContextCategory);

  // console.log(category);

  if (loading) {
    return <Loading />;
  }

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
      {category.map((foodCategory) => {
        return (
          <CategoryItem
            key={foodCategory.idCategory}
            foodCategory={foodCategory}
          />
        );
      })}
    </div>
  );
};

export default Categories;
