import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "./productTypes";

export const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
});
export const getProductsSuccess = (response) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: response,
});
export const getProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error,
});

export const getCategoryRequest = () => ({
  type: GET_CATEGORY_REQUEST,
});
export const getCategorySuccess = (response) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: response,
});
export const getCategoryFailure = (error) => ({
  type: GET_CATEGORY_FAILURE,
  payload: error,
});

export const addProductRequest = () => ({
  type: ADD_PRODUCT_REQUEST,
});
export const addProductSuccess = (response) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: response,
});
export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error,
});
