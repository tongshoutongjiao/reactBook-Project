import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
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

