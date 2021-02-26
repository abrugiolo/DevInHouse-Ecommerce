import {
  SET_PRODUCTS_LIST_IN_CART,
  ADD_PRODUCTS_LIST_IN_CART,
  REMOVE_PRODUCTS_LIST_IN_CART,
  CHANGE_QUANTITY_OF_PRODUCTS_LIST_IN_CART,
} from "../types";

const initialState = {
  productsListInCart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST_IN_CART:
      return {
        ...state,
        productsListInCart: action.payload.list,
      };

    case ADD_PRODUCTS_LIST_IN_CART:
      const copyProductListInCart = [...state.productsListInCart];
      const newProduct = {
        ...action.payload.product,
        quantity: 1,
      };
      copyProductListInCart.push(newProduct);
      return {
        ...state,
        productsListInCart: copyProductListInCart,
      };

    case REMOVE_PRODUCTS_LIST_IN_CART:
      const filteredProducts = state.productsListInCart.filter(
        (product) => product.id !== action.payload.productId
      );

      return {
        ...state,
        productsListInCart: filteredProducts,
      };

    case CHANGE_QUANTITY_OF_PRODUCTS_LIST_IN_CART:
      const copyProductListInCart2 = [...state.productsListInCart];
      const productIndex = copyProductListInCart2.findIndex(
        (product) => product.id === action.payload.productId
      );

      copyProductListInCart2[productIndex].quantity += 1;

      return {
        ...state,
        productsListInCart: copyProductListInCart2,
      };

    default:
      return state;
  }
};
export default cartReducer;
