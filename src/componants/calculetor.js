import React, { Component } from 'react';
import './calculetor.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  eventHandler = (e) => {
    const val = e.target.textContent;
    this.setState((obj) => calculate(obj, val));
  };

  render() {
    const { total, next, operation } = this.state;
    const results = `
    ${
  total || operation || next
    ? `${total || ''} ${operation || ''} ${next || ''}`
    : 0
}`;
    return (
      <div className="calculator">
        <div className="output__section">
          <div className="current">{results}</div>
        </div>

        <div className="input__section">
          <div className="output-ul">
            <button
              type="button"
              onClick={this.eventHandler}
              onKeyDown={this.eventHandler}
              id="clear"
              className="key"
            >
              Ac
            </button>
            <button type="button" onClick={this.eventHandler} id="plus-minus" className="key">
              +/-
            </button>
            <button type="button" onClick={this.eventHandler} id="percent" className="key">
              %
            </button>
            <button type="button" onClick={this.eventHandler} id="divide" className="key action">
              ÷
            </button>
            <button type="button" onClick={this.eventHandler} className="key">
              7
            </button>
            <button type="button" onClick={this.eventHandler} className="key">
              8
            </button>
            <button type="button" onClick={this.eventHandler} className="key">
              9
            </button>
            <button type="button" onClick={this.eventHandler} id="times" className="key action">
              x
            </button>
            <button type="button" onClick={this.eventHandler} className="key">
              4
            </button>
            <button type="button" onClick={this.eventHandler} className="key">
              5
            </button>
            <button type="button" onClick={this.eventHandler} className="key">
              6
            </button>
            <button type="button" onClick={this.eventHandler} id="minus" className="key action">
              -
            </button>
            <button type="button" onClick={this.eventHandler} className="key">
              1
            </button>
            <button type="button" onClick={this.eventHandler} className="key">
              2
            </button>
            <button type="button" onClick={this.eventHandler} className="key">
              3
            </button>
            <button type="button" onClick={this.eventHandler} id="plus" className="key action">
              +
            </button>
            <button type="button" onClick={this.eventHandler} className="key zero">
              0
            </button>
            <button type="button" onClick={this.eventHandler} className="key decimal">
              .
            </button>
            <button type="button" onClick={this.eventHandler} id="equals" className="key action">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
