import { ShopActionTypes } from "../types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMsg: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
