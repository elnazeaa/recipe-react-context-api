import React, { useContext } from "react";
import { Loading } from "../components/index";
import { ContextApi } from "../context/ContextApi";
import Meal from "./Meal";

const MealsItems = (props) => {
  const { allMeals, loading, mealAfterSubmit } = useContext(ContextApi);
  // console.log(allMeals);
  if (loading) {
    return <Loading />;
  }
  if (allMeals === null) {
    console.log(allMeals);
    return (
      <div style={{ marginTop: "2rem" }}>
        <h4
          style={{
            fontSize: "1.2rem",
            fontWeight: "400",
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          There is no result for{" "}
          <span
            style={{ color: "#e65500", borderBottom: "1px solid #e65500" }}
          >{`"${mealAfterSubmit}"`}</span>
          , Search another term.
        </h4>
      </div>
    );
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
      {allMeals.map((meal) => {
        return <Meal key={meal.idMeal} meal={meal} />;
      })}
    </div>
  );
};

export default MealsItems;
