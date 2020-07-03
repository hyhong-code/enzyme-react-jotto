import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import { findByTestAttr, storeFactory } from "../test/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  const wrapper = shallow(<App store={store} />)
    .dive() // .dive() can only be used on connected components
    .dive(); // 2 dives returns the <Component/>
  return wrapper;
};

const connectPropsSetup = (initialState = {}) => {
  const store = storeFactory(initialState);

  // 1 dive returns the <ContextProvider/>, so props are avaliable at .props()
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
};

describe(`Redux props`, () => {
  const success = true;
  test(`Has success piece of prop`, () => {
    const wrapper = connectPropsSetup({ success });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success);
  });

  test(`has access to secretWord prop`, () => {
    const secretWord = "party";
    const wrapper = connectPropsSetup({ secretWord });
    const secretWordProp = wrapper.props().secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test(`has access to guessedWords prop`, () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = connectPropsSetup({ guessedWords });
    const guessedWordsProp = wrapper.props().guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test(`guessWord piece of prop is a function`, () => {
    const wrapper = connectPropsSetup();
    const guessWordProp = wrapper.props().guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
