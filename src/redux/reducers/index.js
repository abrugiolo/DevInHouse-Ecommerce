import { combineReducers } from "redux";
import searchReducer from "./search";
import cartReducer from "./cart";
import detailReducer from "./detail";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  searchReducer,
  cartReducer,
  detailReducer,
  loadingReducer,
});
export default rootReducer;
