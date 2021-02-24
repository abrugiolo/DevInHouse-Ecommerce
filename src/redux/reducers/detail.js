import { SET_PRODUCT_DETAIL } from "../types";

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

    default:
      return state;
  }
};
export default detailReducer;
