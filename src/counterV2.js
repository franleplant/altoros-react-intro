import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>I'm a fancy counter</h1>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}


class CountState {
  constructor() {
    this.count = 0;
  }

  inc() {
    this.count++;
    this.render()
  }

  render() {
    ReactDOM.render(
      <Counter count={this.count} />,
      document.getElementById('root')
    );
  }
}


export default function ex3v2() {
  const count = new CountState();
  count.render();
  setInterval(_ => count.inc(), 1000);
}
