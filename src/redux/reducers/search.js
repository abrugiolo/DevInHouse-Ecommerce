import { SET_INPUT_SEARCH } from "../types";

const initialState = {
  inputSearch: undefined,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_SEARCH:
      return {
        ...state,
        inputSearch: action.payload.input,
      };

    default:
      return state;
  }
};
export default searchReducer;
