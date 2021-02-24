import {
  SET_INPUT_SEARCH,
  SET_PRODUCT_DETAIL,
  SET_PRODUCTS_LIST,
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
    type: SET_PRODUCTS_LIST,
    payload: { list: list },
  };
};
