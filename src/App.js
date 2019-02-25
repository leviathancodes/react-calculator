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
  }

  render() {
    return (
      <div className="container">
        <Display displayValue={this.state.displayValue}/>
        <Buttons />
      </div>
    );
  }
}

export default App;
