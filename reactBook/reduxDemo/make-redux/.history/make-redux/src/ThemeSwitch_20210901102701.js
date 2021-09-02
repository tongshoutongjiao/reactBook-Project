import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from './connect'

class ThemeSwitch extends Component {
    static propTypes={
        themeColor:PropTypes.string,
        onSwitchColor:PropTypes.func
    }
    
    handleClick(color){
        console.log('CHANGE color ')
        if (this.props.onSwitchColor) {
            console.log('哈哈哈')
            this.props.onSwitchColor(color)
        }

    }




    render(){
        return (
            <div>
                <button style={{color:this.props.themeColor}} onClick={this.handleClick.bind(this,'red')}>Red</button>
                <button style={{color:this.props.themeColor}} onClick={this.handleClick.bind(this,'blue')}>Blue</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onSwitchColor: (color) => {
          console.log('dispatch');
          console.log(dispatch)
        dispatch({ type: 'CHANGE_COLOR', themeColor: color })
      }
    }
}
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch
