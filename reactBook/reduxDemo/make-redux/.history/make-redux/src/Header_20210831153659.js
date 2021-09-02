
import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    static contextType={
        store:PropTypes.object
    }

    constructor(){
        super()
        this.state={themeColor:''}
    }




    render(){
        return (
            <h1>React.js小书</h1>
        )
    }
}

export default Header
