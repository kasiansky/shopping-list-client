import { performRequest } from "../../services/api";
import {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  addProductSuccess,
  addProductRequest,
  addProductFailure,
  getCategoryRequest,
  getCategorySuccess,
  getCategoryFailure,
} from "./productActions";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(getProductsRequest());

      const response = await performRequest({
        path: "product",
      });

      dispatch(getProductsSuccess(response));
    } catch (error) {
      dispatch(getProductsFailure(error));
    }
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    try {
      dispatch(getCategoryRequest());

      const response = await performRequest({
        path: "category",
      });

      dispatch(getCategorySuccess(response));
    } catch (error) {
      dispatch(getCategoryFailure(error));
    }
  };
};

export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      dispatch(addProductRequest());

      const response = await performRequest({
        path: "product",
        method: "POST",
        body: data,
      });

      dispatch(addProductSuccess(response));
    } catch (error) {
      dispatch(addProductFailure(error));
    }
  };
};
