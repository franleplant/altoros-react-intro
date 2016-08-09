import React, { Component } from 'react';


class Parent extends Component {
  render() {
    return (
      <div>
        <p>Hello there! This are my children</p>
        {this.props.children}
      </div>
    );
  }
}

export default class Children extends Component {
  render() {
    return (
      <Parent>
        <p>Hello Im Children 1</p>
        <p>Hello Im Children 2</p>
      </Parent>
    );
  }
}
