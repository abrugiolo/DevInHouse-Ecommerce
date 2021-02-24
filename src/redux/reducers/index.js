import { combineReducers } from "redux";
import searchReducer from "./search";
import cartReducer from "./cart";
import detailReducer from "./detail";

const rootReducer = combineReducers({
  searchReducer,
  cartReducer,
  detailReducer,
});
export default rootReducer;
