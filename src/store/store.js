import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
// import logger from "redux-logger";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const middleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  // console.log("type", action.type);
  // console.log("payload", action.payload);
  // console.log("current state", store.getState());

  next(action);

  // console.log("next state", store.getState());
};

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [middleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
