import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import {connect} from './connect'

class Content extends Component {

    static contextTypes={
        store:PropTypes.object
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

  Content=connect(mapToStateToProp)(Content)


export default Content

