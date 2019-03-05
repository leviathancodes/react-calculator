import React, { Component } from 'react';
import './App.scss';
import Display from './components/Display';
import Buttons from './components/Buttons';
import * as math from 'mathjs'

class App extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      displayValue: 0,
      calculation: ["0"],
      lastInput: "init",
      clear: "AC"
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
  }

  handleDigits(e) {
    let val = this.state.displayValue;
    let num = e.target.innerHTML;
    let lastInput = this.state.lastInput;

    if (val === "0.") {
      let newVal = val + num
      this.setState({displayValue: newVal, lastInput: num})
    }

    if (lastInput == "init") {
      val = num
      return this.setState({displayValue: num, lastInput: num, clear: "C"})
    }
    
    if (val.length >= 10) {
      return this.setState({displayValue: "ERR", lastInput: num})
    }

    if (val == "ERR") {
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
      (lastInput == "X" ||
       lastInput == "+" ||
       lastInput == "-" ||
       lastInput == "÷")) {
        return this.setState({displayValue: num, lastInput: num})
      }

    let newVal = val + num
    this.setState({displayValue: newVal, 
      lastInput: num})
  }

  handleDecimal(e) {
    let val = this.state.displayValue;
    let decimal = e.target.innerHTML;

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
    let lastInput = this.state.lastInput;

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

  handleCalculation(e) {
    let val = this.state.displayValue;
    let operator = e.target.innerHTML;
    let calculationState = this.state.calculation.slice();
    let lastInput = e.target.innerHTML;

    if (operator == "X") {
      operator = "*"
    } 
    if (operator == "÷") {
      operator = "/"
    }

    if (val == "ERR") {
      return this.setState({displayValue: 0, lastInput: "init", clear: "AC"})
    }

    if (this.state.lastInput === "X" || 
    this.state.lastInput === "+" ||
    this.state.lastInput === "-" ||
    this.state.lastInput === "÷") {
    calculationState.splice(calculationState.length - 1, 1)
    calculationState.push(operator)
    return this.setState({calculation: calculationState, lastInput: lastInput})
    }

    calculationState.push(val)
    calculationState.push(operator)

    this.setState({calculation: calculationState, lastInput: lastInput})
  }

  handleEquals(e) {
    let val = this.state.displayValue;

    if (val == "ERR") {
      return this.setState({displayValue: 0, lastInput: "init", clear: "AC"})
    }

    let calculationState = this.state.calculation.slice();
    calculationState.shift()
    calculationState.push(String(val))
    let solution = (math.eval(calculationState.join(" ")));
    
    if (String(solution).length >= 10) {
      solution = solution.toFixed(6);

      if (solution == 0.300000) {
        return this.setState({displayValue: "0.3", calculation: ["0"], lastInput: "="}) 
      }

      if (solution.length >= 10) {
        return this.setState({displayValue: "ERR", calculation: ["0"], lastInput: "="})
      }
    }
    
    return this.setState({displayValue: solution, calculation: ["0"], lastInput: "="})
  }

  handleKey(e) {
    console.log(`Your key: ${e.key}`)
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
        clearState={this.state.clear}/>
      </div>
    );
  }
}

export default App;