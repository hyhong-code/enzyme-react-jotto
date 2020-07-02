import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  let contents;
  if (!props.guessedWords.length) {
    contents = <span data-test="instructions">Please guess a word</span>;
  }
  return <div data-test="component-guessedWords">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
