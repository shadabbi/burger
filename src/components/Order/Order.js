import React from "react";

import classes from "./Order.module.scss";

function Order({ data }) {
  const allIngredients = [];
  for (const key in data.ingredients) {
    allIngredients.push({ name: key, amount: data.ingredients[key] });
  }

  return (
    <div className={classes.order}>
      <div className={classes.ingredients}>
        Ingredients:
        {allIngredients.map((ing) => (
          <p key={ing.name}>{`${ing.name} (${ing.amount})`}</p>
        ))}
      </div>
      <p>
        Price: <strong>{+data.price}</strong>
      </p>
    </div>
  );
}

export default Order;
