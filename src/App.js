import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Display from './components/Display';
import Buttons from './components/Buttons';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayValue: 0
    }
    this.handleDigits = this.handleDigits.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePercentage = this.handlePercentage.bind(this);
    this.handlePosiNeg = this.handlePosiNeg.bind(this);
  }

  handleDigits(e) {
    let val = this.state.displayValue;
    let num = e.target.innerHTML
    if (val.length >= 10) {
      return
    }

    if (val == "ERR") {
      return this.setState({displayValue: 0})
    }

    if ((val === "0" && num === "0") || (val == 0 && String(val).indexOf(".0") == -1) ) {
      return this.setState({displayValue: num}) 
    }

    if (num === "." && val.includes(".")) {
      return
    }
    
    let newVal = val += num
    console.log(newVal)
    this.setState({displayValue: newVal})
  }

  handleClear(e) {
    this.setState({displayValue: 0})
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


  render() {
    return (
      <div className="container">
        <Display displayValue={this.state.displayValue}/>
        <Buttons clickNum={this.handleDigits} 
        clear={this.handleClear} 
        percentage={this.handlePercentage}
        posiNeg={this.handlePosiNeg}/>
      </div>
    );
  }
}

export default App;
