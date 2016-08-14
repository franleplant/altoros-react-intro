import ReactDOM from 'react-dom';
import React, { Component } from 'react';


class Parent extends Component {
  render() {
    return (
      <div>
        <p>Hello there! This are my children</p>
        {this.props.children}
        <div>
          <p>I can clone them!!!</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Children extends Component {
  render() {
    return (
      <Parent>
        <p>Hello Im Children 1</p>
        <p>Hello Im Children 2</p>
        <p>Hello Im Children 2</p>
      </Parent>
    );
  }
}

export default function ex5() {
  ReactDOM.render(
    <Children/>,
    document.getElementById('root')
  );
}
