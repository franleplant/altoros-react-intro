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


class CountState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    setInterval(_ => {
      this.setState({
          count: this.state.count + 1
      })
    }, 1000);
  }

  render() {
    return (
      <Counter count={this.state.count} />
    )
  }
}


export default function ex3v3() {
  ReactDOM.render(
    <CountState />,
    document.getElementById('root')
  );
}
