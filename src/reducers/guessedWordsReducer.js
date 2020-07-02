import { actionTypes } from "../actions/index";

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - Action to be reduced
 * @returns {array} new guessedWords state
 */
const guessedWordsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GUESS_WORD:
      return [...state, payload];
    default:
      return state;
  }
};

export default guessedWordsReducer;
