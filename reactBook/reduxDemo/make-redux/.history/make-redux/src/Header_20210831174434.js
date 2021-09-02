
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from './connect'

class Header extends Component {
    static contextTypes={
        themeColor:PropTypes.string
    }

    componentWillMount () {
        this._updateThemeColor()
        this.context.store.subscribe(()=>{this._updateThemeColor()})
    }

    _updateThemeColor () {
        const { store } = this.context
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
    }




    render(){
        return (
            <h1 style={{ color: this.state.themeColor }}>React.js小书</h1>
        )
    }
}




export default Header
