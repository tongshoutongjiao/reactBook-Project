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
    
        this.state.comments.push(comment)
    //    let  newComments=comments.push(comment)

        this.setState({
            comments:this.state.comments
        })

        console.log('查看存储之后的数据')

        console.log(this.state)
        

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


