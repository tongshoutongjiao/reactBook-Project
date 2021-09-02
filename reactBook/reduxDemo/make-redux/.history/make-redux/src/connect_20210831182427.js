import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

export const connect=(mapStateToProps) =>(WrapperComment)=>{
    class Connect extends Component {
        static contextTypes={
            store:PropTypes.object
        }

        constructor(){
            
        }



        render(){
            const {store}=this.context;
            let stateProps=mapStateToProps(store.getState())
            return <WrapperComment {...stateProps}></WrapperComment>
        }
    
    
    }
    return Connect

 
}


