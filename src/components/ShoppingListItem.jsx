import { Grid } from "@mui/material";
import React from "react";

const ShoppingListItem = ({ productsByCategory, category }) => {
  const categoryData = productsByCategory[category.id];

  if (categoryData) {
    return (
      <Grid item xs={4}>
        <h2>
          {categoryData.products.length} : {category.name} מוצרים
        </h2>

        <ul>
          {categoryData.products.map((product) => (
            <li key={product.id}>
              {product.name} : כמות {product.amount}
            </li>
          ))}
        </ul>
      </Grid>
    );
  } else {
    return null;
  }
};

export default ShoppingListItem;
