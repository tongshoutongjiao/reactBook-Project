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
    componentWillMount(){
        this._updateThemeColor()

    }
    _updateThemeColor(){
        const store=this.context.store;

        console.log(this.context)
        const state=store.getState();
        console.log('state')
        console.log(state.getState())
        this.setState({
            themeColor:state.themeColor
        })
    }



    render () {
        console.log('content.js');
        console.log(this.state)
      return (
        <div>
          <p style={{color:this.state.themeColor}}>React.js 小书内容</p>
          <ThemeSwitch />
        </div>
      )
    }
  }
export default Content

