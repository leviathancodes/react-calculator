import React from 'react';

const Buttons = props => {

const buttonObj = [
    
    {
        button: "button",
        row1: {
            class: "button-row-1",
            id: ["clear", "", "", "divide"],
            key: ["C", "+/-", "%", "/"]
        },
        row2: {
            class: "button-row-2",
            id: ["seven", "eight", "nine", "multiply"],
            key: ["7", "8", "9", "X"]
        },
        row3: {
            class: "button-row-3",
            id: ["four", "five", "six", "subtract"],
            key: ["4", "5", "6", "-"]
        },
        row4: {
            class: "button-row-4",
            id: ["one", "two", "three", "add"],
            key: ["1", "2", "3", "+"]
        },
        row5: {
            class: "button-row-5",
            id: ["zero", "decimal", "equals"],
            keys: ["0", ".", "="]
        }
    },
]



    return (
<div className="buttons">
    <div className="button-row button-row-1">
   <div className="button" onClick={props.clear} id="clear">C</div>
      <div className="button" onClick={props.posiNeg}>+/-</div>
      <div className="button" onClick={props.percentage}>%</div>
      <div className="button button-side" id="divide">/</div>   
    </div>
    <div className="button-row button-row-2">
      <div className="button" onClick={props.clickNum} id="seven">7</div>
      <div className="button" onClick={props.clickNum} id="eight">8</div>
      <div className="button" onClick={props.clickNum} id="nine">9</div>
      <div className="button button-side" id="multiply">X</div>
    </div>
    <div className="button-row button-row-3">
      <div className="button" onClick={props.clickNum} id="four">4</div>
      <div className="button" onClick={props.clickNum} id="five">5</div>
      <div className="button" onClick={props.clickNum} id="six">6</div>
      <div className="button button-side" id="subtract">-</div>
      
    </div>
    <div className="button-row button-row-4">
      <div className="button" onClick={props.clickNum} id="three">3</div>
      <div className="button" onClick={props.clickNum} id="two">2</div>
      <div className="button" onClick={props.clickNum} id="one">1</div>
      <div className="button button-side" id="add">+</div>
    </div>
    <div className="button-row button-row-5">
      <div className="button" onClick={props.clickNum} id="zero">0</div>
      <div className="button" onClick={props.clickNum} id="decimal">.</div>
      <div className="button button-side" id="equals">=</div>
    </div>
  </div>

    );
  };

  export default Buttons;