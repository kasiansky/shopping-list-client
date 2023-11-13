import { Grid } from "@mui/material";

import { useSelector } from "react-redux";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
  const { products } = useSelector((state) => state.product.products);
  const categories = useSelector((state) => state.product.categories);

  const productsByCategory = products
    ? products.reduce((acc, product) => {
        const { category, ...restProduct } = product;
        if (!acc[category.id]) {
          acc[category.id] = { category, products: [] };
        }
        acc[category.id].products.push(restProduct);
        return acc;
      }, {})
    : {};

  return (
    <Grid container spacing={2}>
      {products && products.length > 0 ? (
        <>
          {categories.map((category) => (
            <ShoppingListItem
              category={category}
              productsByCategory={productsByCategory}
            />
          ))}
        </>
      ) : null}
    </Grid>
  );
};

export default ShoppingList;
