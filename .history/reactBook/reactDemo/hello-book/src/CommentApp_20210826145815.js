import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'


export default class CommentApp extends Component {




    render() {
        return ( <div class="wrapper"> 
            <CommentInput></CommentInput>
            <CommentList></CommentList>
            
            
             </div>

        )
    }

}