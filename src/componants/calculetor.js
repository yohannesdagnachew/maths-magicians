import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [data, setData] = useState({
    obj: { total: 0, next: '', operation: '' },
  });
  const eventHandler = (e) => {
    const val = e.target.textContent;
    setData(({ obj }) => ({ obj: calculate(obj, val) }));
  };
  const results = `
    ${
  data.obj.total || data.obj.operation || data.obj.next
    ? `${data.obj.total || ''} ${data.obj.operation || ''} ${
      data.obj.next || ''
    }`
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
            onClick={eventHandler}
            onKeyDown={eventHandler}
            id="clear"
            className="key"
          >
            Ac
          </button>
          <button type="button" onClick={eventHandler} id="plus-minus" className="key">
            +/-
          </button>
          <button type="button" onClick={eventHandler} id="percent" className="key">
            %
          </button>
          <button type="button" onClick={eventHandler} id="divide" className="key action">
            ÷
          </button>
          <button type="button" onClick={eventHandler} className="key">
            7
          </button>
          <button type="button" onClick={eventHandler} className="key">
            8
          </button>
          <button type="button" onClick={eventHandler} className="key">
            9
          </button>
          <button type="button" onClick={eventHandler} id="times" className="key action">
            x
          </button>
          <button type="button" onClick={eventHandler} className="key">
            4
          </button>
          <button type="button" onClick={eventHandler} className="key">
            5
          </button>
          <button type="button" onClick={eventHandler} className="key">
            6
          </button>
          <button type="button" onClick={eventHandler} id="minus" className="key action">
            -
          </button>
          <button type="button" onClick={eventHandler} className="key">
            1
          </button>
          <button type="button" onClick={eventHandler} className="key">
            2
          </button>
          <button type="button" onClick={eventHandler} className="key">
            3
          </button>
          <button type="button" onClick={eventHandler} id="plus" className="key action">
            +
          </button>
          <button type="button" onClick={eventHandler} className="key zero">
            0
          </button>
          <button type="button" onClick={eventHandler} className="key decimal">
            .
          </button>
          <button type="button" onClick={eventHandler} id="equals" className="key action">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
