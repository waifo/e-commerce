import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import getReducers from "../reducers";

const middlerwares = [logger];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export const store = createStore(
  getReducers,
  composeEnhancers(applyMiddleware(...middlerwares))
);

export const persistor = persistStore(store);

// export default { store, persistor };
