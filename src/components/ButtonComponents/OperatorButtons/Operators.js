import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

export default function Operators(props){
  const[operatorState, setOperatorState] = useState(operators);
  console.log(operatorState)
  // STEP 2 - add the imported data to state
  return (
    <div className ="op">
      {
        operatorState.map(item =>
          <OperatorButton key={item.char} signs ={item.char}/>
          )
      }

    </div>
  );
};
//hooks are shortcuts that allow functional componenets to hold state