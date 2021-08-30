import React, { Component } from 'react'
import PropTypes from 'prop-types'

console.log('评论输入功能')

export default class CommentInput extends Component {

    static propTypes = {
        onSubmit: PropTypes.func
      }

    

    constructor(){
        super()
        this.state={
            username:'',
            content:''


        }
    }

    componentDidMount(){
        this.textarea.focus()
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
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({username, content})
          }
          this.setState({ content: '' })

    }

    handleUsernameBlur(){
        console.log('失去焦点事件')

    }






    render(){
        return (

            <div className='comment-input'>

                    <div className='comment-field'>
                        <span className='comment-field-name'>用户名：</span>
                        <div className='comment-field-input'>
                         <input value={this.state.username} onBlur={this.handleUsernameBlur.bind(this)} onChange={this.handleUsernameChange.bind(this)}/>
                        </div>
                    </div>

                    <div className='comment-field'>

                        <span className='comment-field-name'>评论内容：</span>

                        <div className='comment-field-input'>
                            <textarea ref={(textarea)=>this.textarea=textarea}  value={this.state.content} onChange={this.handleContentChange .bind(this)}  />
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
