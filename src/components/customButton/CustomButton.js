import React from "react";
import "./CustomButton.css";

function CustomButton(props) {
  return (
    <div>
      <button
        className="custom-btn"
        type="submit"
        onClick={props.onButtonClick}
        disabled={props.disabled}
      >
        {props.title}
      </button>
    </div>
  );
}

export default CustomButton;
