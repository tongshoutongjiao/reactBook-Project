
import React, { Component } from 'react'
import Comment from './Comment'

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
                      console.log('comment内容');
                      console.log(comment)
                     return <Comment comment={comment} key={i}></Comment>
                  })
              }
            </div>
        )
    }

}