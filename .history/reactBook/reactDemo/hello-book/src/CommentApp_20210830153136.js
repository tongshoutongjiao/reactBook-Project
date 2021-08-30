import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'



export default class CommentApp extends Component {
    constructor(){
        super()
        this.state={
            comments:[]
        }

    }
    componentWillMount(){
        this._loadComments()

    }

    _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
          comments = JSON.parse(comments)
          this.setState({ comments })
        }
    }
    _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }




    handleSubmitComment (comment) {

        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
    
        let comments=this.state.comments;
       comments.push(comment);
   
        this.setState({
            comments
        })
        this._saveComments(comments)

        

    }




    render() {

        return ( <div className="wrapper"> 
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)} ></CommentInput>
            <CommentList comments={this.state.comments}></CommentList>
            
            
             </div>

        )
    }

}


