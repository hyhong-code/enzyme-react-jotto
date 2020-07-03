import React from "react";
import { connect } from "react-redux";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import { guessWord } from "./actions/index";
import Input from "./Input";
import "./App.css";

const App = ({ success, guessedWords, secretWord, guessWord }) => (
  <div className="container">
    <h1>Jotto</h1>
    <Congrats success={success} />
    <Input />
    <GuessedWords guessedWords={guessedWords} />
  </div>
);

const mapStateToProps = ({ success, guessedWords, secretWord }) => ({
  success,
  guessedWords,
  secretWord,
});

export default connect(mapStateToProps, { guessWord })(App);
