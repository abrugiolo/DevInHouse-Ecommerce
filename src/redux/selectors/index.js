export const getInputSearch = (store) => store.searchReducer.inputSearch;
export const getProductsListInCart = (store) =>
  store.cartReducer.productsListInCart;
export const getProductDetail = (store) => store.detailReducer.productDetail;
export const getProductQuantity = (productId) => (store) =>
  store.cartReducer.productsListInCart.find(
    (product) => product.id === productId
  )?.quantity;
