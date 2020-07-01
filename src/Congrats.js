import React from "react";

/**
 * Functional component for congratulatory message.
 * @function
 * @param {obejct} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'succcess' prop is false)
 */
const Congrats = (props) => {
  return props.success ? (
    <div data-test="component-congrats" className="">
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    </div>
  ) : (
    <div data-test="component-congrats"></div>
  );
};

export default Congrats;
