/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import './calculetor.css';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { expresions: '' };
  }

  render() {
    return (
      <div className="cal">
        <div>
          <input className="disply-input" type="text" placeholder="0" />
        </div>
        <div className="row">
          <button className="number">
            Ac
          </button>
          <button className="number">
            +/-
          </button>
          <button className="number">
            %
          </button>
          <button className="oprator">
            ÷
          </button>
        </div>
        <div className="row">
          <button className="number">
            7
          </button>
          <button className="number">
            8
          </button>
          <button className="number">
            9
          </button>
          <button className="oprator">
            ×
          </button>
        </div>
        <div className="row">
          <button className="number">
            4
          </button>
          <button className="number">
            6
          </button>
          <button className="number">
            5
          </button>
          <button className="oprator">
            -
          </button>
        </div>
        <div className="row">
          <button className="number">
            1
          </button>
          <button className="number">
            2
          </button>
          <button className="number">
            3
          </button>
          <button className="oprator">
            +
          </button>
        </div>
        <div className="last-row">
          <button className="number zero">
            0
          </button>
          <button className="number">
            .
          </button>
          <button className="oprator">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
