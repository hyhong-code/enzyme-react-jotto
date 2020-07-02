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
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    test(`renders without error`, () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test(`renders the input box`, () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    test(`renders the submit button`, () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    test(`renders without error`, () => {});
    test(`does not render the input box`, () => {});
    test(`does not render the submit button`, () => {});
  });
});

describe("update state", () => {});
