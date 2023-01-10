import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
// import logger from "redux-logger";

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

const middleWares = [middleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
