/**
 * @function getLetterMatchCount
 * @param {string} guessedWord - Word guessed by user
 * @param {string} secretWord - Word generated by server
 * @return {number} Count of letters in guessedWord that matches secretWord
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
  const guessedLettersSet = new Set([...guessedWord]);
  const secretLettersSet = new Set([...secretWord]);
  return [...guessedLettersSet].reduce(
    (acc, cur) => (secretLettersSet.has(cur) ? acc + 1 : acc),
    0
  );
};
