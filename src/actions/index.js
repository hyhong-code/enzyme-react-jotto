export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

/**
 *
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT GUESS action
 * @function guessword
 * @param {string} guessedWord - Guessed word from user
 * @returns {function} - Redux Thunk function
 */
export const guessWord = (guessedWord) => (dispatch, getState) => {};
