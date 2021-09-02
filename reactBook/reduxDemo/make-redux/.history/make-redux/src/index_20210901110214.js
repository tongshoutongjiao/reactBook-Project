import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import { Provider } from './react-redux'
import store from './themeReducer'
import './index.css'





class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}


ReactDOM.render(
  <Provider store={store}>
     <Index />
  </Provider>,
  document.getElementById('root')
)