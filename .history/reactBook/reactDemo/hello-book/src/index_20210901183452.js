import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import { createStore } from 'redux'
import ContextApp from './context'
import { Provider } from 'react-redux'
import './index.css';



const store=createStore(commentsReducer)

ReactDOM.render(
<Provider store={store}>
  <CommentApp />
</Provider>,
  document.getElementById('root')
)