import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Title extends Component{
  render(){
    return <h1>React 小书  ew </h1>
  }
}


class Header extends Component {
  render () {
    return (
    <div>
      <Title />
      <h2>This is Header</h2>
    </div>
    )
  }
}


ReactDOM.render(<Header></Header>,
  document.getElementById('root')
  )