import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getCategory } from "../redux/product/productAsyncActions";

const AddProductForm = () => {
  const [category, setCategory] = useState(null);
  const [textFieldValue, setTextFieldValue] = useState(null);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleSelect = (event) => {
    setCategory(event.target.value);
  };
  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };
  const handleSubmit = () => {
    if (textFieldValue && category) {
      const productObj = {
        name: textFieldValue,
        categoryId: category,
      };
      dispatch(addProduct(productObj));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <Button
        sx={{ fontSize: "20px" }}
        size="large"
        variant="contained"
        onClick={handleSubmit}
      >
        אוסף
      </Button>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="label">קטגוריה</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="select"
          label="קטגוריה"
          onChange={handleSelect}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="מוצר"
        variant="outlined"
        onChange={handleTextFieldChange}
      />
    </Box>
  );
};

export default AddProductForm;
