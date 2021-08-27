import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'



export default class CommentApp extends Component {

    handleSubmitComment (comment,e) {
        console.log('查看组件输入功能')
        console.log(comment)
        console.log(e)

    }




    render() {
        return ( <div className="wrapper"> 
            <CommentInput onSubmit={this.handleSubmitComment.bind(this,e)} ></CommentInput>
            <CommentList></CommentList>
            
            
             </div>

        )
    }

}


