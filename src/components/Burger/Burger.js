import { object } from "prop-types";
import React from "react";

import classes from "./Burger.module.scss";
import Ingredient from "./BurgerIngredients/BurgerIngredients";

function Burger(props) {
  const ingredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <Ingredient key={igKey + i} type={igKey} />;
    });
  });
  return <div className={classes.burger}>{ingredients}</div>;
}

export default Burger;
