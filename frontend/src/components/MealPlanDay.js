import React, { useState } from "react";
import styled from "styled-components";
import RecipeByDay from "./RecipeByDay";

const MealPlanDay = ({ recipeIDs, index, mealPlanRecipes }) => {
  const [displaying, setDisplaying] = useState(false);
  const dayByIndex = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };
  // const filterRecipes = mealPlanRecipes.filter((recipe) => {
  //   return recipeIDs.indexOf();
  // });

  return (
    <div>
      <CardWrapper>
        <Day
          onClick={() => {
            setDisplaying(!displaying);
          }}
        >
          {dayByIndex[index]}
        </Day>
        <RecipeList displaying={displaying}>
          {recipeIDs.map((id) => {
            return (
              <RecipeByDay mealPlanRecipes={mealPlanRecipes} recipeIDs={id} />
            );
          })}
        </RecipeList>
      </CardWrapper>
    </div>
  );
};

export default MealPlanDay;

const CardWrapper = styled.div``;
const Day = styled.div``;
const RecipeList = styled.div`
  display: ${(p) => (p.displaying ? "block" : "none")};
`;