import React from 'react';

const Buttons = props => {
    return (
<div class="buttons">
    <div class="button-row button-row-1">
   <div class="button" id="clear">C</div>
      <div class="button">+/-</div>
      <div class="button">%</div>
      <div class="button button-side" id="divide">/</div>   
    </div>
    <div class="button-row button-row-2">
      <div class="button" id="seven">7</div>
      <div class="button" id="eight">8</div>
      <div class="button" id="nine">9</div>
      <div class="button button-side" id="multiply">X</div>
    </div>
    <div class="button-row button-row-3">
      <div class="button" id="four">4</div>
      <div class="button" id="five">5</div>
      <div class="button" id="six">6</div>
      <div class="button button-side" id="subtract">-</div>
      
    </div>
    <div class="button-row button-row-4">
      <div class="button" id="three">3</div>
      <div class="button" id="two">2</div>
      <div class="button" id="one">1</div>
      <div class="button button-side" id="add">+</div>
    </div>
    <div class="button-row button-row-5" id='specificity-hack'>
      <div class="button" id="zero">0</div>
      <div class="button" id="decimal">.</div>
      <div class="button button-side" id="equals">=</div>
    </div>
  </div>

    );
  };

  export default Buttons;