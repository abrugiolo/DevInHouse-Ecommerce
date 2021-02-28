import { SET_INPUT_SEARCH } from "../types";

const initialState = {
  inputSearch: undefined,
  clicked: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_SEARCH:
      return {
        ...state,
        inputSearch: action.payload.input,
        clicked: action.payload.click,
      };

    default:
      return state;
  }
};
export default searchReducer;
