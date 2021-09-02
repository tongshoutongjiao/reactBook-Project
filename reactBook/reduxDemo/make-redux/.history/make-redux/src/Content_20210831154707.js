import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {

    static contextTypes={
        store:PropTypes.object
    }
    constructor(){
        super();
        this.state={
            themeColor:''
        }
    }
    componentWillUnmount(){
        this._updateThemeColor()

    }
    _updateThemeColor(){
        const store=this.context.store;
        const state=store.getState();
        this.setState({
            themeColor:state.themeColor
        })
    }



    render () {
        console.log('content.js')
      return (
        <div>
          <p>React.js 小书内容</p>
          <ThemeSwitch />
        </div>
      )
    }
  }
export default Content

