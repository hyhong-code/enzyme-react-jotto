import React, { useState } from "react";
import { connect } from "react-redux";

const Input = ({ success }) => {
  const contents = success ? null : (
    <form className="form-inline">
      <input
        data-test="input-box"
        type="text"
        placeholder="enter guess"
        className="mb-2 mx-sm-3"
      />
      <button
        data-test="submit-button"
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
  return <div data-test="component-input">{contents}</div>;
};

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps)(Input);
