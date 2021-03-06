import {
  SET_INPUT_SEARCH,
  SET_PRODUCT_DETAIL,
  ADD_PRODUCTS_IN_DETAIL,
  SET_PRODUCTS_LIST_IN_CART,
  ADD_PRODUCTS_LIST_IN_CART,
  REMOVE_PRODUCTS_LIST_IN_CART,
  CHANGE_QUANTITY_OF_PRODUCTS_LIST_IN_CART,
  CALCULATE_TOTAL_PRODUCTS_LIST_IN_CART,
  RESET_CART,
  SET_LOADING,
} from "../types";

export const setInputSearch = (input, click) => {
  return {
    type: SET_INPUT_SEARCH,
    payload: {
      input: input,
      click: click,
    },
  };
};

export const setProductDetail = (product) => {
  return {
    type: SET_PRODUCT_DETAIL,
    payload: { product: product },
  };
};

export const addProductDetail = (product) => {
  return {
    type: ADD_PRODUCTS_IN_DETAIL,
    payload: { product: product },
  };
};

export const setProductsList = (product) => {
  return {
    type: SET_PRODUCTS_LIST_IN_CART,
    payload: { product: product },
  };
};

export const resetCart = (product) => {
  return {
    type: RESET_CART,
    payload: { product: product },
  };
};

export const addProductsListInCart = (product) => {
  return {
    type: ADD_PRODUCTS_LIST_IN_CART,
    payload: { product: product },
  };
};
export const removeProductsListInCart = (productId) => {
  return {
    type: REMOVE_PRODUCTS_LIST_IN_CART,
    payload: { productId: productId },
  };
};

export const changeQuantityOfProductsListInCart = (productId, operation) => {
  return {
    type: CHANGE_QUANTITY_OF_PRODUCTS_LIST_IN_CART,
    payload: {
      productId: productId,
      operation: operation,
    },
  };
};
export const calculateTotalProductsListInCart = (total) => {
  return {
    type: CALCULATE_TOTAL_PRODUCTS_LIST_IN_CART,
    payload: { total: total },
  };
};

export const setLoading = (option) => {
  return {
    type: SET_LOADING,
    payload: { option: option },
  };
};
