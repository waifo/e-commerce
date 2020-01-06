import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import directoryReducer from "./directory";
import userReducer from "./user";
import cartReducer from "./cart";
import shopReducer from "./shop";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
const getReducers = combineReducers({
  directory: directoryReducer,
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, getReducers);
