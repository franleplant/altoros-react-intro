import ReactDOM from 'react-dom';
import React, { Component } from 'react';

// Functional Stateless Component
function NameP({name}) {
  return (
    <p className="namep">{name}</p>
  );
}

export default function ex1() {
  ReactDOM.render(
    <NameP name="Altoros" />,
    document.getElementById('root')
  );
}
