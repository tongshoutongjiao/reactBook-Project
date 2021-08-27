import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'



export default class CommentApp extends Component {
    handleSubmitComment (comment) {
        console.log(comment)
    }




    render() {
        return ( <div className="wrapper"> 
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)} ></CommentInput>
            <CommentList></CommentList>
            
            
             </div>

        )
    }

}


