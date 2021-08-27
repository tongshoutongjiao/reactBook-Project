
import React, { Component } from 'react'
import Comment from './comment'

export default class CommentList extends Component {

    static defaultProps = {
        comments: []
      }

    render(){
        console.log('评论列表');
        console.log(this.props)
        console.log(this.props.comments)

      
        return (
            <div>
              {
                  this.props.comments.map((comment,i)=>{
                      <Comment comment={comment} key={i}></Comment>
                  })
              }
            </div>
        )
    }

}