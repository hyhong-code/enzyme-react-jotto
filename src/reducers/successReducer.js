import { actionTypes } from "../actions/index";

/**
 * @function successReducer
 * @param {object} state - Array of guessed words
 * @param {object} action - Action to be reduced
 * @return {boolean} - new success states
 */
const successReducer = (state = false, action) => {
  // const { type, payload } = action;
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

export default successReducer;
