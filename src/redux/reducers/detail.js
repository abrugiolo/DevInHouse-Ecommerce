import { SET_PRODUCT_DETAIL, ADD_PRODUCTS_IN_DETAIL } from "../types";

const initialState = {
  productDetail: undefined,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload.product,
      };

    case ADD_PRODUCTS_IN_DETAIL:
      const newProductDetail = {
        ...action.payload.product,
      };
      return {
        ...state,
        productDetail: newProductDetail,
      };
    default:
      return state;
  }
};
export default detailReducer;
