import React from 'react';
import {ReactComponent as BackspaceIcon} from '../backspace_icon.svg'

const Buttons = props => {

  if (props.page == 1) {
    return (
      <div className="buttons">
          <div className="button-row button-row-1">
         <div className="button" onClick={props.clear} id="clear">{props.clearState}</div>
            <div className="button" onClick={props.posiNeg}>+/-</div>
            <div className="button" onClick={props.backspace} id="backspace"><BackspaceIcon /></div>
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
  } else {
    return (
  <div className="buttons">
    <div className="button-row button-row-1">
   <div className="button" onClick={props.func} id="pi">𝜋</div>
      <div className="button" id="sqrt" onClick={props.func}>√</div>
      <div className="button" id="sqrt3" onClick={props.func}>∛</div>
      <div className="button" id="sqrt4" onClick={props.func}>∜</div>   
    </div>
    <div className="button-row button-row-2">
      <div className="button" id="percentage" onClick={props.func}>%</div>
      <div className="button" id="cosine" onClick={props.func}>cos</div>
      <div className="button" id="sine" onClick={props.func}>sin</div>
      <div className="button" id="tangent" onClick={props.func}>tan</div>
    </div>
    <div className="button-row button-row-3">
      <div className="button" id="random" onClick={props.func}>Rand</div>
      <div className="button" id="pow2" onClick={props.func}><var>x<sup>2</sup></var></div>
      <div className="button" id="pow3" onClick={props.func}><var>x<sup>3</sup></var></div>
      <div className="button"></div>
      
    </div>
    <div className="button-row button-row-4">
      <div className="button"></div>
      <div className="button" ></div>
      <div className="button"></div>
      <div className="button"></div>
    </div>
    <div className="button-row button-row-5" id='specificity-hack'>
      <div className="button"></div>
      <div className="button" id="decimal"></div>
      <div className="button"></div>
    </div>
  </div>
    );
  }

  };

  export default Buttons;