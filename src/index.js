import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import NameP from './namep';
import Avatar from './avatar';
import Select from './select';
import Children from './children';

const element = document.getElementById('root');

// TODO: give style to this

// Ex1
ReactDOM.render(
  <NameP name="Altoros" />,
  element
);


// Ex2
//ReactDOM.render(
  //<Avatar name="Altoros" imgUrl="http://placehold.it/100x100"/>,
  //element
//)

// Ex3: state
//ReactDOM.render(

  //<Select/>,
  //element
//)

// Ex4: children
//ReactDOM.render(
  //<Children/>
//,
  //element
//)
