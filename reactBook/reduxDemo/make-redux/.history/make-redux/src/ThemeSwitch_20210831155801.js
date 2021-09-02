import React,{Component} from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
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
        console.log('哈哈');
        this._updateThemeColor()

    }




    render(){
        console.log('ThemeSwitch');
        return (
            <div>
                <button>Red</button>
                <button>Blue</button>
            </div>
        )
    }

}

export default ThemeSwitch
