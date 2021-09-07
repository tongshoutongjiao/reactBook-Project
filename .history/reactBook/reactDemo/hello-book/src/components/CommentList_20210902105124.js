import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    handleDeleteComment(index) {
        console.log('查看索引');
        console.log(index)
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }


    render() {
        return ( <div> {
                this.props.comments.map((comment, i) => {
                    return <Comment comment = { comment }
                    key = { i }
                    index = { i }
                    onDeleteComment = { this.handleDeleteComment.bind(this) }> </Comment>
                })
            } </div>
        )
    }

}