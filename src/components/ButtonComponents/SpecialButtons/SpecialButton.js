import React from "react";

const SpecialButton = (props) => {
  console.log(props);
  return (
    <div>
      <button className="button specials-button">
        {props.btn}
      </button>
    </div>
  );
};
export default SpecialButton;