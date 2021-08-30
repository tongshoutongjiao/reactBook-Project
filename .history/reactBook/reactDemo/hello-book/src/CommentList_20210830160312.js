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

    render() {
        return ( <
            div > {
                this.props.comments.map((comment, i) => {

                    return <Comment comment = { comment }
                    key = { i } > < /Comment>
                })
            } <
            /div>
        )
    }

}