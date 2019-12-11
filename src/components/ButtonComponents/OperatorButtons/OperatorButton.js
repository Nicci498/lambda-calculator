import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <button className="button signs-button">
          {props.signs}
        </button>
      </div>
    </>
  );
};
export default OperatorButton;