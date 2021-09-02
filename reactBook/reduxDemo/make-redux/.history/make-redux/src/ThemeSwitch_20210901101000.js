import React,{Component} from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
    static propTypes={
        themeColor:PropTypes.string,
        onSwitchColor:PropTypes.func
    }

  

    
    handleClick(color){
        console.log('CHANGE color ')
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }

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

const mapDispatchToProps = (dispatch) => {
    return {
      onSwitchColor: (color) => {
        dispatch({ type: 'CHANGE_COLOR', themeColor: color })
      }
    }
  }

export default ThemeSwitch
