import React, { Component } from 'react';

export default class NameP extends Component {
  render() {
    return (
      <p className="namep">{this.props.name}</p>
    );
  }
}
