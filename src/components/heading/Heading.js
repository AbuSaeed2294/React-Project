import React from "react";
import "./Heading.css";

function Heading(props) {
  return (
    <div className="heading-container">
      <h1 className="heading">{props.heading}</h1>
      <p className="heading-paragraph">{props.paragraph}</p>
    </div>
  );
}

export default Heading;
