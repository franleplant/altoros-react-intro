import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class NameP extends Component {
  render() {
    return (
      <p className="namep">{this.props.name}</p>
    );
  }
}

class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <img src={this.props.imgUrl} height="100" width="100"/>
        <NameP name={this.props.name} />
      </div>
    );
  }
}

export default function ex2() {
  ReactDOM.render(
    <Avatar name="Altoros" imgUrl="http://placehold.it/100x100"/>,
    document.getElementById('root')
  );
}
