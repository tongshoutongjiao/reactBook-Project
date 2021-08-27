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
        console.log('查看组件输入功能')
        console.log(arguments)
        console.log(comment)
        let comments=this.state.comments;
       let  newComments=comments.push(comment)

        this.setState({
            comments:newComments
        })
        

    }




    render() {
        return ( <div className="wrapper"> 
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)} ></CommentInput>
            <CommentList comments={this.state.comments}></CommentList>
            
            
             </div>

        )
    }

}


