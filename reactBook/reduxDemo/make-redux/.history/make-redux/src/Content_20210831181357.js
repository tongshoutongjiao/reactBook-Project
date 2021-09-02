import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import Connect from './connect'

class Content extends Component {

    static contextTypes={
        store:PropTypes.object
    }
    constructor(){
        super();
        this.state={
            themeColor:this.props.themeColor
        }
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

  const mapToStateToProp=(state)=>{
      return {
          themeColor:state.themeColor
      }

  }

  Content=Connect(mapToStateToProp)(Content)


export default Content

