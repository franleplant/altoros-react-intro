import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';

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

// Lo ignoramos por ahora por temas de tiempo
// HABLAR DE PROP TYPES
Counter.propTypes = {
  count: PropTypes.number
}

// HABLAR DE DEFAULT PROPS
Counter.defaultProps = {
  count: 0
}

function render(count) {
  ReactDOM.render(
    <Counter count={count} />,
    document.getElementById('root')
  );
}

export default function ex3() {
  let count = 0;
  render(count);
  setInterval(_ => render(++count), 1000);
}
