
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from './connect'

class Header extends Component {
    static contextTypes={
        themeColor:PropTypes.string
    }
    render(){
        return (
            <h1 style={{ color: this.props.themeColor }}>React.js小书</h1>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('哈哈哈，看一下state是干啥的，好吧？');
    console.log(state)
    return {
      themeColor: state.themeColor
    }
  }
  Header=connect(mapStateToProps)(Header)




export default Header
