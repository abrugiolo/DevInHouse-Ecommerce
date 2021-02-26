import {
  SET_INPUT_SEARCH,
  SET_PRODUCT_DETAIL,
  SET_PRODUCTS_LIST_IN_CART,
  ADD_PRODUCTS_LIST_IN_CART,
  REMOVE_PRODUCTS_LIST_IN_CART,
  CHANGE_QUANTITY_OF_PRODUCTS_LIST_IN_CART
} from "../types";

export const setInputSearch = (input) => {
  return {
    type: SET_INPUT_SEARCH,
    payload: { input: input },
  };
};

export const setProductDetail = (product) => {
  return {
    type: SET_PRODUCT_DETAIL,
    payload: { product: product },
  };
};

export const setProductsList = (list) => {
  return {
    type: SET_PRODUCTS_LIST_IN_CART,
    payload: { list: list },
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

export const changeQuantityOfProductsListInCart = (productId) => {
  return {
    type: CHANGE_QUANTITY_OF_PRODUCTS_LIST_IN_CART,
    payload: { productId: productId },
  };
};
