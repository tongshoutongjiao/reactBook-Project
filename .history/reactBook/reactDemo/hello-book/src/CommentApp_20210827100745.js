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

    handleSubmitComment (comment) {
    
        let comments=this.state.comments;
       comments.push(comment);
   
        this.setState({
            comments:comments
        })

        

    }




    render() {

        console.log('查看渲染函数');
        console.log(this.state)
        return ( <div className="wrapper"> 
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)} ></CommentInput>
            <CommentList comments={this.state.comments}></CommentList>
            
            
             </div>

        )
    }

}


