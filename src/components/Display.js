import React, { Component } from 'react';

const Display = props => {

      return (
        <div className="display" id="display">
          <div className="display-text">{props.displayValue}</div>
        </div>
      );
    }

export default Display;