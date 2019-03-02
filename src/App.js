import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Display from './components/Display';
import Buttons from './components/Buttons';




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayValue: 0,
      calculation: ["0"],
      lastInput: "init"
    }
    this.handleDigits = this.handleDigits.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePercentage = this.handlePercentage.bind(this);
    this.handlePosiNeg = this.handlePosiNeg.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
    this.handleEquals = this.handleEquals.bind(this)
  }

  handleDigits(e) {
    let val = this.state.displayValue;
    let num = e.target.innerHTML;
    let lastInput = this.state.lastInput;
    let calculationState = this.state.calculation;

    if (lastInput == "init" ) {
      val = num
      return this.setState({displayValue: num, lastInput: num})
    }
    
    if (val.length >= 10) {
      return 
    }

    if (val == "ERR") {
      return this.setState({displayValue: 0})
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
    let lastInput = this.state.lastInput;

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
    this.setState({displayValue: 0})
    this.setState({calculation: ["0"]})
  }

  handlePercentage(e) {
    
    let val = this.state.displayValue;
    let percentage = val/100;
    percentage = percentage.toString();
    
    if (val == "ERR") {
      return this.setState({displayValue: 0})
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
    let val = this.state.displayValue;
    if (val != 0 && val != "." && val != "ERR") {
      this.setState({displayValue: "-" + val})
    }
    if (val[0] == "-") {
      val = val.replace("-", "");
      this.setState({displayValue: val})
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

    if (this.state.lastInput === "X" || 
    this.state.lastInput === "+" ||
    this.state.lastInput === "-" ||
    this.state.lastInput === "÷") {
    calculationState.splice(calculationState.length - 1, 1)
    calculationState.push(operator)
    this.setState({calculation: calculationState, lastInput: lastInput})
    return console.log(calculationState, lastInput, this.state.lastInput)
    }

    calculationState.push(val)
    calculationState.push(operator)

    console.log(calculationState, lastInput, this.state.lastInput)
    this.setState({calculation: calculationState, lastInput: lastInput})
  }

  handleEquals(e) {
    let val = this.state.displayValue;
    let calculationState = this.state.calculation.slice();
    calculationState.shift()
    calculationState.push(String(val))
    let solution = (eval(calculationState.join(" ")));
    if (String(solution).length >= 10) {
      solution = solution.toFixed(6);
    }
    this.setState({displayValue: solution, calculation: ["0"], lastInput: "="})
    console.log(this.state.calculation)
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
        equals={this.handleEquals}/>
      </div>
    );
  }
}

export default App;
