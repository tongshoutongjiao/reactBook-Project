import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'


function createStore (reducer) {

    // 定义state 属性
  let state = null

//    定义listeners 容器，存储订阅事件
  const listeners = []

//  定义订阅函数subscribe
  const subscribe = (listener) => listeners.push(listener)

//   定义回去数据的函数
  const getState = () => state

//   定义dispatch 函数
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

//  执行dispatch 初始化state
  dispatch({}) // 初始化 state

//    返回对应的接口函数
  return { getState, dispatch, subscribe }
}
const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}
const store = createStore(themeReducer)