import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
