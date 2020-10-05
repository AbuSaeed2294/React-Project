import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

function CustomSpinner(props) {
  return (
    <div>
      <div className="sweet-loading">
        <BeatLoader size={25} color={"#123abc"} loading={props.loading} />
      </div>
    </div>
  );
}

export default CustomSpinner;
