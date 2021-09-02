import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from '../wrapWithLoadData'



export default class CommentApp extends Component {
    render() {

        return ( <div className = "wrapper" >
            <CommentInput onSubmit = { this.handleSubmitComment.bind(this) } > </CommentInput>
             <CommentList comments = { this.state.comments }
            onDeleteComment = { this.handleDeleteComment.bind(this) }> </CommentList>
            </div>

        )
    }

}
CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp