import React,{Component} from 'react'
import PropTypes from 'prop-types'

export const connect=(wrapperComment)=>{
    class Connect extends Component {
        static contextTypes={
            store:PropTypes.object

        }
    }


}