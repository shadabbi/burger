import React from "react";

import classes from "./Burger.module.scss";
import Ingredient from "./BurgerIngredients/BurgerIngredients";

function Burger(props) {
  const ingredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <Ingredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={classes.burger}>
      {<Ingredient type="bread-top" />}
      {ingredients.reduce((prev, next) => {
        return prev + next.length;
      }, 0) > 0 ? (
        ingredients
      ) : (
        <p>Start Adding Ingredients</p>
      )}
      {<Ingredient type="bread-bottom" />}
    </div>
  );
}

export default Burger;
