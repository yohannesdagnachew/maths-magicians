import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './componants/calculetor';
import Navbar from './componants/navbar/Navbar';
import Home from './pages/home/Home';
import Quote from './pages/quote/Quote';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
