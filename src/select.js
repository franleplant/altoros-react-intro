import ReactDOM from 'react-dom';
import React, { Component } from 'react';

const COLORS = ['Rojo', 'Verde', 'Azul']
const DEFMESSAGE = 'Seleccione un Color'

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      option: null
    }

    // Ignoremos esto por ahora
    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOpenClick(e) {
    this.setState({
      open: !this.state.open
    })
  }

  handleOptionClick(color) {
    this.setState({
      option: color,
      open: false
    });
  }

  render() {
    let list;
    if (this.state.open) {
      list = (
        <ul className="select-list-container">
          {COLORS.map(color => (
            <li
            className="select-list-element"
            key={color}
            onClick={_ => this.handleOptionClick(color)}>
              <p className="select-option">{color}</p>
            </li>
          ))}
        </ul>
      )
    }


    return (
      <div className="select-container">
        <p className="select-option" onClick={this.handleOpenClick}>
          {this.state.option || DEFMESSAGE }
          <button className="select-arrow">&#9660;</button>
        </p>
        {list}
      </div>
    );
  }
}

export default function ex4() {
  ReactDOM.render(
    <Select/>,
    document.getElementById('root')
  );
}
