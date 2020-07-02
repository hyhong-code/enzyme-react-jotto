import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the Congrats components
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...props} />);
};

test("does not throw error with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;

  // Runs before each test, intialize wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessedWords");
    expect(component.length).toBe(1);
  });

  test("renders instructions", () => {
    // console.log(wrapper.debug());
    const instructions = findByTestAttr(wrapper, "instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {});
