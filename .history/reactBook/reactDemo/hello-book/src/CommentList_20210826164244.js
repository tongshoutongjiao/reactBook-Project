
import React, { Component } from 'react'
import Comment from './comment'

export default class CommentList extends Component {

    render(){
        console.log('评论列表');

        const comments = [
            {username: 'Jerry', content: 'Hello'},
            {username: 'Tomy', content: 'Worsld'},
            {username: 'Lucy', content: 'Good'}
          ]
      
        return (
            <div>
              {comments.map((comment,i)=><Comment comment={comment}></Comment>)}



            </div>
        )
    }

}