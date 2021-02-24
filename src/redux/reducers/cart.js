import { SET_PRODUCTS_LIST } from "../types";

const initialState = {
  productsList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return {
        ...state,
        productsList: action.payload.list,
      };

    default:
      return state;
  }
};
export default cartReducer;
