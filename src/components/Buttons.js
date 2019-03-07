import React from 'react';

const Buttons = props => {

    return (
<div className="buttons">
    <div className="button-row button-row-1">
   <div className="button" onClick={props.clear} id="clear">{props.clearState}</div>
      <div className="button" onClick={props.posiNeg}>+/-</div>
      <div className="button" onClick={props.percentage}>%</div>
      <div className="button button-side" onClick={props.calculation}id="divide">÷</div>   
    </div>
    <div className="button-row button-row-2">
      <div className="button" onClick={props.clickNum} id="seven">7</div>
      <div className="button" onClick={props.clickNum} id="eight">8</div>
      <div className="button" onClick={props.clickNum} id="nine">9</div>
      <div className="button button-side" onClick={props.calculation} id="multiply">X</div>
    </div>
    <div className="button-row button-row-3">
      <div className="button" onClick={props.clickNum} id="four">4</div>
      <div className="button" onClick={props.clickNum} id="five">5</div>
      <div className="button" onClick={props.clickNum} id="six">6</div>
      <div className="button button-side" onClick={props.calculation} id="subtract">-</div>
      
    </div>
    <div className="button-row button-row-4">
      <div className="button" onClick={props.clickNum} id="one">1</div>
      <div className="button" onClick={props.clickNum} id="two">2</div>
      <div className="button" onClick={props.clickNum} id="three">3</div>
      <div className="button button-side" onClick={props.calculation}id="add">+</div>
    </div>
    <div className="button-row button-row-5">
      <div className="button" onClick={props.clickNum} id="zero">0</div>
      <div className="button" onClick={props.decimal} id="decimal">.</div>
      <div className="button button-side" onClick={props.equals} id="equals">=</div>
    </div>
  </div>

    );
  };

  export default Buttons;