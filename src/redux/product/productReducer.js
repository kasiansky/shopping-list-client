import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILURE,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "./productTypes";

const initState = {
  isLoading: false,
  products: [],
  categories: [],
  error: null,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ADD_PRODUCT_SUCCESS:
      const { id } = action.payload;

      const updatedProducts = state.products.products.map((product) =>
        product.id === id ? { ...product, amount: product.amount + 1 } : product
      );

      const productExists = state.products.products.some(
        (product) => product.id === id
      );

      return {
        ...state,
        products: {
          ...state.products,
          products: productExists
            ? updatedProducts
            : [...updatedProducts, { ...action.payload, amount: 1 }],
          total: productExists
            ? state.products.total
            : state.products.total + 1,
        },
        isLoading: false,
        error: null,
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default productReducer;
