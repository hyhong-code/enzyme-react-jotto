import { getLetterMatchCount } from "../helpers/index";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

/**
 *
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) dispatch CORRECT_GUESS action
 * @function guessword
 * @param {string} guessedWord - Guessed word from user
 * @returns {function} - Redux Thunk function
 */
export const guessWord = (guessedWord) => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount },
  });
  if (guessedWord === secretWord) {
    dispatch({
      type: actionTypes.CORRECT_GUESS,
    });
  }
};
