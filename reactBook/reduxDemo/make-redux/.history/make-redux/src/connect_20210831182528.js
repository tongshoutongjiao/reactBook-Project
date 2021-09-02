import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

export const connect=(mapStateToProps) =>(WrapperComment)=>{
    class Connect extends Component {
        static contextTypes={
            store:PropTypes.object
        }

        constructor(){
            super()
            this.state={allProps:{}}
        }

        componentWillMount () {
            const { store } = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }



        render(){
            const {store}=this.context;
            let stateProps=mapStateToProps(store.getState())
            return <WrapperComment {...stateProps}></WrapperComment>
        }
    
    
    }
    return Connect

 
}


