
import React, { Component } from 'react'
import Comment from './comment'

export default class CommentList extends Component {

    render(){
        console.log('评论列表')
        return (
            <div>
                评论列表
                <Comment></Comment>





            </div>
        )
    }

}