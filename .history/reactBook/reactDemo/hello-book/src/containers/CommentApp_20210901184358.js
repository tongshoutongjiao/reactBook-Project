import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from '../wrapWithLoadData'



export default class CommentApp extends Component {
    render() {
        return ( <div className = "wrapper" >
            <CommentInput></CommentInput>
             <CommentList></CommentList>
            </div>

        )
    }

}
// CommentApp = wrapWithLoadData(CommentApp, 'comments')
// export default CommentApp