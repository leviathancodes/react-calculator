import React, { Component } from 'react';
import './App.scss';
import Display from './components/Display';
import Buttons from './components/Buttons';
import Pagination from './components/Pagination'
import * as math from 'mathjs'

class App extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      displayValue: 0,
      calculation: ["0"],
      lastInput: "init",
      clear: "AC",
      page: 1,
    }
    this.handleDigits = this.handleDigits.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePercentage = this.handlePercentage.bind(this);
    this.handlePosiNeg = this.handlePosiNeg.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.testFunction = this.handleKey.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.changePage = this.changePage.bind(this)
    this.mathFunction = this.handleMathFunction.bind(this)
  }

  handleDigits(e, key) {
    let val = this.state.displayValue;
    let num;
    e ? num = e.target.innerHTML : num = key
 
    let lastInput = this.state.lastInput;

    if (val === "0.") {
      let newVal = val + num
      this.setState({displayValue: newVal, lastInput: num})
    }

    if (lastInput == "init") {
      val = num
      return this.setState({displayValue: num, lastInput: num, clear: "C"})
    }
    
    if (val.length >= 16) {
      return this.setState({displayValue: "ERR", lastInput: num})
    }

    if (val == "ERR" || val == "NaN" || val == "Infinity") {
      return this.setState({displayValue: 0, lastInput: "init", clear: "AC"})
    }
    if (val == "0" && num == "0") {
      return
    }

    if (num != "0" && val == "0") {
      val = num;
      return this.setState({displayValue: num, lastInput: num})
    }

    if ( 
      (lastInput == "*" ||
       lastInput == "+" ||
       lastInput == "-" ||
       lastInput == "/")) {
        return this.setState({displayValue: num, lastInput: num})
      }

    let newVal = val + num
    this.setState({displayValue: newVal, 
      lastInput: num})
  }

  handleMathFunction(e) {
    const currentValue = Number(this.state.displayValue);
    const mathFunction = e.target.id;
    const random = Number(math.random(0,1).toFixed(8));
    const pi = 3.14159265359;
    console.log(mathFunction);

    switch (mathFunction) {
      case "pi":
      this.setState({displayValue: pi, lastInput: mathFunction})
      break;
      case "random":
      this.setState({displayValue: random, lastInput: mathFunction})
      break;
      case "percentage":
      this.handlePercentage()
      break;
      case "sine":
      this.setState({displayValue: math.sin(currentValue).toFixed(8), lastInput: mathFunction})
      break;
      case "cosine":
      this.setState({displayValue: math.cos(currentValue).toFixed(8), lastInput: mathFunction})
      break;
      case "tangent":
      this.setState({displayValue: math.tan(currentValue).toFixed(8), lastInput: mathFunction})
      break;
      case "pow2":
      this.setState({displayValue: math.pow(currentValue, 2), lastInput: mathFunction})
      break;
      case "pow3":
      this.setState({displayValue: math.pow(currentValue, 3), lastInput: mathFunction})
      break;
      case "sqrt":
      this.setState({displayValue: math.sqrt(currentValue).toFixed(8), lastInput: mathFunction})
      break;
      case "sqrt3":
      this.setState({displayValue: math.nthRoot(currentValue, 3,).toFixed(8), lastInput: mathFunction})
      break;
      case "sqrt4":
      this.setState({displayValue: math.nthRoot(currentValue, 4).toFixed(8), lastInput: mathFunction})
      break;
      default: 
      console.log("yo")
    }
   }

  handleDecimal(e, key) {
    let val = this.state.displayValue;
    let decimal;

    e ? decimal = e.target.innerHTML : decimal = key

    if (val == "0") {
      val += decimal
      return this.setState({displayValue: "0.", lastInput: decimal, clear: "C"})
    }

    if (val == "ERR") {
      return this.setState({displayValue: 0, lastInput: "init", clear: "AC"})
    }

    if (val[val.length - 1] == decimal) {
      return
    }

    if (val.includes(".")) {
      return
    }

    val += decimal
    this.setState({displayValue: val, lastInput: decimal}) 
  }

  handleClear(e) {
    this.setState({displayValue: 0, calculation: ["0"], clear: "AC", lastInput: "init"})
  }

  handlePercentage(e) {
    
    let val = this.state.displayValue;
    let percentage = val/100;
    percentage = percentage.toString();
    
    if (val == "ERR") {
      return this.setState({displayValue: 0, lastInput: "init", clear: "AC"})
    }

    console.log(percentage);
    
    if (percentage.length >= 10) {
      this.setState({displayValue: "ERR"})
    }

    if (percentage.includes('e') || percentage.length >= 10) {
      return this.setState({displayValue: "ERR"})
    }
    
    this.setState({displayValue: percentage})
  }

  handlePosiNeg(e) {
    const val = this.state.displayValue;

    console.log(val[0])

    if (val == "ERR") {
      return this.setState({displayValue: 0, lastInput: "init", clear: "AC"})
    }

    if (Math.sign(Number(val)) == -1) {
      return this.setState({displayValue: Math.abs(Number(val))})
    }

    if (val != 0 && val != "." && val != "ERR") {
      this.setState({displayValue: "-" + val, lastInput: "NegSign"})
    }

  }

  handleCalculation(e, key) {
    console.log(this.state.lastInput)
    let val = this.state.displayValue;
    let operator;

    e ? operator = e.target.innerHTML : operator = key

    if (operator == "X") {
      operator = "*"
    } 
    if (operator == "÷") {
      operator = "/"
    }

    let calculationState = this.state.calculation.slice();

    let lastInput = operator;


    if (val == "ERR") {
      return this.setState({displayValue: 0, lastInput: "init", clear: "AC"})
    }




    if (this.state.lastInput === "*" || 
    this.state.lastInput === "+" ||
    this.state.lastInput === "-" ||
    this.state.lastInput === "/"
    ) 
    {
    calculationState.splice(calculationState.length - 1, 1)
    calculationState.push(lastInput)
    return this.setState({calculation: calculationState, lastInput: lastInput})
    }

    calculationState.push(val)
    calculationState.push(lastInput)

    this.setState({calculation: calculationState, lastInput: lastInput})
  }

  handleEquals(e) {
    console.log(this.state.lastInput)
    let val = this.state.displayValue;

    if (val == "ERR") {
      return this.setState({displayValue: 0, lastInput: "init", clear: "AC"})
    }

    let calculationState = this.state.calculation.slice();
    calculationState.shift()
    calculationState.push(String(val))
    let solution = (math.eval(calculationState.join(" ")));
    
    if (String(solution).length >= 16) {
      solution = solution.toFixed(6);

      if (solution == 0.300000) {
        return this.setState({displayValue: "0.3", calculation: ["0"], lastInput: "="}) 
      }

      if (solution.length > 16) {
        return this.setState({displayValue: "ERR", calculation: ["0"], lastInput: "="})
      }
    }
    
    return this.setState({displayValue: String(solution), calculation: ["0"], lastInput: "="})
  }

  handleBackspace(e) {
    let val = String(this.state.displayValue);

    if (val == "0") {
      return
    }
    console.log("backspace was pressed")
    if (val.length == 1 || val == "ERR") {
      return this.setState({displayValue: 0})
    }
    val = val.slice(0, val.length - 1)
    this.setState({displayValue: val})
    
  }

  handleKey(e) {
    const clickedKey = e.key
    console.log(`Your key: ${clickedKey}`, typeof clickedKey)

    if (clickedKey == "Enter") {
      this.handleEquals()
    }
    if (clickedKey == "Backspace") {
      this.handleBackspace()
    }

    if (Number(clickedKey) || clickedKey == "0") {
      this.handleDigits(null, clickedKey)
    }

    if (clickedKey == "c" || clickedKey == "C" || clickedKey == "Escape") {
      this.handleClear()
    }

    if (clickedKey == "+" || clickedKey == "-" || clickedKey == "/" || clickedKey == "x" || clickedKey == "X" || clickedKey == "*") {
      if (clickedKey == "x" || clickedKey == "X") {
        return this.handleCalculation(null, "*")
      } 
      this.handleCalculation(null, clickedKey)
    }

    if (clickedKey == ".") {
      this.handleDecimal(null, clickedKey)
    }

    if (clickedKey == "ArrowRight") {
      return this.setState({page: 2})
    }

    if (clickedKey == "ArrowLeft") {
      return this.setState({page: 1})
    }

  }

  changePage(e) {
    if (this.state.page == 1) {
      return this.setState({page: 2})
    }
    return this.setState({page:1})
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
    }

  render() {
    return (
      <div className="container">
        <Display displayValue={this.state.displayValue}/>
        <Buttons clickNum={this.handleDigits} 
        decimal={this.handleDecimal}
        clear={this.handleClear} 
        percentage={this.handlePercentage}
        posiNeg={this.handlePosiNeg}
        addition={this.handlePlus}
        calculation={this.handleCalculation}
        equals={this.handleEquals}
        clearState={this.state.clear}
        backspace={this.handleBackspace}
        page={this.state.page}
        func={this.mathFunction}/>
        <Pagination page={this.state.page} changePage={this.changePage}/>
      </div>
    );
  }
}

export default App;