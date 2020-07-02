import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps, storeFactory } from "../test/testUtils";
import Input from "./Input";

/**
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive(); // .dive() returns a shallow wrapper around the one non-DOM child of current wrapper
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    // let wrapper;

    // beforeEach(() => {
    //   wrapper = setup();
    // });

    // afterEach(() => {
    //   wrapper.unmount();
    // });

    test(`renders without error`, () => {});
    test(`renders the input box`, () => {});
    test(`renders the submit button`, () => {});
  });
  describe("word has been guessed", () => {
    test(`renders without error`, () => {});
    test(`does not render the input box`, () => {});
    test(`does not render the submit button`, () => {});
  });
});

describe("update state", () => {});
