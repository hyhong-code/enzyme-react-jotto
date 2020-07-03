import { actionTypes } from "../actions/index";

/**
 * @function secretWordReducer
 * @param {object} state - State before reduce
 * @param {object} action - Action to be reduced
 * @returns {string} New state secretWord from payload
 */
const secretWordReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SECRET_WORD:
      return payload;
    default:
      return state;
  }
};

export default secretWordReducer;
