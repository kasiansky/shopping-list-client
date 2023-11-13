import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ShoppingList from "./ShoppingList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/product/productAsyncActions";
import AddProductForm from "./AddProductForm";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Box sx={{ marginTop: "20px" }}>סה"כ : {products.total} מוצרים</Box>
      <AddProductForm />

      <ShoppingList products={products.products} />
    </div>
  );
};

export default HomePage;
