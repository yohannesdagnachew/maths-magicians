import React, { Component } from 'react';
import Calculator from './componants/calculetor';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
