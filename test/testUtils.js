import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers/index";
import { middlewares } from "../src/configureStore.js";

/**
 * Creates a testing store with imported reducers, middleware, and intialState.
 * @function storeFactory
 * @param {object} initialState  - initial state for the store
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) =>
  createStore(rootReducer, initialState, applyMiddleware(...middlewares));

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data test attribue for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Asserts if the comformingProps comform with component's propTypes
 * @param {object} component - React component with propTypes
 * @param {object} conformingProps - React props to be checked
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
