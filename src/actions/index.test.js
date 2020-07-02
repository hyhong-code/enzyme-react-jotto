import { correctGuess } from "./index";
import { actionTypes } from "./index";

describe("correct guess", () => {
  test("returns an action with type 'CORRECT_GUESS'", () => {
    const action = correctGuess();

    // Can't use toBe on objects and arrays (mutable)
    // Only on numbers and strings (immutable)
    // toEqual compares contents (deep equal)
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
