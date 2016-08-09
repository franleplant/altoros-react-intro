import React, { Component } from 'react';

class NameP extends Component {
  render() {
    return (
      <p className="namep">{this.props.name}</p>
    );
  }
}

export default class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <img src={this.props.imgUrl} height={100} width={100}/>
        <NameP name={this.props.name} />
      </div>
    );
  }
}
