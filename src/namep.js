import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class NameP extends Component {
  render() {
    return (
      <p className="namep">{this.props.name}</p>
    );
  }
}

export default function ex1() {
  ReactDOM.render(
    <NameP name="Altoros" />,
    document.getElementById('root')
  );
}
