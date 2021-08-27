import React, { Component } from 'react'

console.log('评论输入功能')

export default class CommentInput extends Component {

    constructor(){
        super()
        this.state={
            username:'',
            content:''


        }

    }
    handleUsernameChange(event){

        this.setState({
            username: event.target.value
        })
    }

    handleContentChange (event){
        this.setState({
            content: event.target.value
        })

    }

    handleSubmit(){
        console.log('获取用户名称和用户输入的内容数据')

    }






    render(){
        return (

            <div className='comment-input'>

                    <div className='comment-field'>
                        <span className='comment-field-name'>用户名：</span>
                        <div className='comment-field-input'>
                         <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
                        </div>
                    </div>

                    <div className='comment-field'>

                        <span className='comment-field-name'>评论内容：</span>

                        <div className='comment-field-input'>
                            <textarea  value={this.state.content} onChange={this.handleContentChange .bind(this)}  />
                        </div>

                    </div>

                    <div className='comment-field-button' onClick={this.handleSubmit.bind(this)}>
                            <button>
                                发布
                            </button>
                    </div>
            
            </div>
        )

    }

 

}
