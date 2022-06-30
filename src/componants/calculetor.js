/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
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
          <ul className="output-ul">
            <li
              onClick={this.eventHandler}
              onKeyDown={this.eventHandler}
              id="clear"
              className="key"
            >
              Ac
            </li>
            <li onClick={this.eventHandler} id="plus-minus" className="key">
              +/-
            </li>
            <li onClick={this.eventHandler} id="percent" className="key">
              %
            </li>
            <li onClick={this.eventHandler} id="divide" className="key action">
              ÷
            </li>
            <li onClick={this.eventHandler} className="key">
              7
            </li>
            <li onClick={this.eventHandler} className="key">
              8
            </li>
            <li onClick={this.eventHandler} className="key">
              9
            </li>
            <li onClick={this.eventHandler} id="times" className="key action">
              x
            </li>
            <li onClick={this.eventHandler} className="key">
              4
            </li>
            <li onClick={this.eventHandler} className="key">
              5
            </li>
            <li onClick={this.eventHandler} className="key">
              6
            </li>
            <li onClick={this.eventHandler} id="minus" className="key action">
              -
            </li>
            <li onClick={this.eventHandler} className="key">
              1
            </li>
            <li onClick={this.eventHandler} className="key">
              2
            </li>
            <li onClick={this.eventHandler} className="key">
              3
            </li>
            <li onClick={this.eventHandler} id="plus" className="key action">
              +
            </li>
            <li onClick={this.eventHandler} className="key zero">
              0
            </li>
            <li onClick={this.eventHandler} className="key decimal">
              .
            </li>
            <li onClick={this.eventHandler} id="equals" className="key action">
              =
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Calculator;
