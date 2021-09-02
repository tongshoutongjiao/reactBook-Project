import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'


function createStore (reducer) {

    //  getState subscribe licenses dispatch

    // 定义state 属性
    const state=null;
 

//    定义listeners 容器，存储订阅事件
    let listeners=[]


//  定义订阅函数subscribe
    const subscribe=(listener)=>{
        listeners.push(listener)
    }

  
//   定义获取数据的函数
const getState=()=>state
 

//   定义dispatch 函数
 

//  执行dispatch 初始化state


//    返回对应的接口函数
  return { getState, dispatch, subscribe }
}

// reducer 函数的用法
const themeReducer = (state, action) => {

    //  初始化state 数据
  if (!state) return {
    themeColor: 'red'
  }

//    执行函数操作数据
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}
const store = createStore(themeReducer)

export default store