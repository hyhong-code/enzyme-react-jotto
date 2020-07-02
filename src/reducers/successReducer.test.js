import { actionTypes } from "../actions/index";
import successReducer from "./successReducer";

test(`returns default initial state when no action is passed`, () => {
  // Must pass in an object for action, otherwise cannot read property type of undefined
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test(`returns state of true upon receiving an action of type "CORRECT_GUESS"`, () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
