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
        this.context.store.subscribe(() => this._updateThemeColor())

    }
    _updateThemeColor(){
        let store=this.context.store;
        let state=store.getState();
        this.setState({
            themeColor:state.themeColor
        })
    }
    handleClick(color){
        console.log('CHANGE color ')
        this.context.store.dispatch({type:'CHANGE_COLOR',themeColor:'blue'})

    }




    render(){
        console.log('ThemeSwitch');
        return (
            <div>
                <button style={{color:this.state.themeColor}} onClick={this.handleClick.bind(this,'red')}>Red</button>
                <button style={{color:this.state.themeColor}} onClick={this.handleClick.bind(this,'blue')}>Blue</button>
            </div>
        )
    }

}

export default ThemeSwitch
