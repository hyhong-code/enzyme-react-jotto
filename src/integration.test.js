import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions/index";

describe(`guessword action dispatcher`, () => {
  const guessedWord = "train";
  const secretWord = "party";

  describe(`no guessedword`, () => {
    const initialState = { secretWord };
    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test(`update state correctly for unsuccessful guesses`, () => {
      store.dispatch(guessWord(guessedWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ guessedWord, letterMatchCount: 3 }],
      };
      expect(newState).toEqual(expectedState);
    });

    test(`update state correctly for successful guesses`, () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe(`some guessedwords`, () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 2 }];
    const initialState = { secretWord, guessedWords };

    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test(`update state correctly for unsuccessful guesses`, () => {
      store.dispatch(guessWord(guessedWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [...guessedWords, { guessedWord, letterMatchCount: 3 }],
      };
      expect(newState).toEqual(expectedState);
    });

    test(`update state correctly for successful guesses`, () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
