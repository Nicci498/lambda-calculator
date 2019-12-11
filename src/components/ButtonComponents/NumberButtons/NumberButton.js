import React from "react";

const NumberButton = (props) => {
  console.log(props);
  return (
    <div>
      <button className = "button number-button">
        {props.oneToZero}
      </button>
    </div>  
    
  );
};
export default NumberButton;