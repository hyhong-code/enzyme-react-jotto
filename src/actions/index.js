import { getLetterMatchCount } from "../helpers/index";
import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
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

// export const getSecretWord = () => async (dispatch) => {
//   const response = await axios.get("http://localhost:3030");
//   dispatch({
//     type: actionTypes.SET_SECRET_WORD,
//     payload: response.data,
//   });
// };

export function getSecretWord() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3030");

    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: response.data,
    });
  };
}
