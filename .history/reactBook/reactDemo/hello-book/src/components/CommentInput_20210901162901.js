import React, { Component } from 'react'
import PropTypes from 'prop-types'
import wrapWithLoadData from '../wrapWithLoadData'

console.log('评论输入功能')

class CommentInput extends Component {

    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }



    constructor(props) {
        super(props)
        this.state = {
            username: props.data, // 从 props 上取 username 字段
            content: ''
        }
    }

    componentDidMount() {
        this.textarea.focus()
    }






    handleUsernameChange(event) {

        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })

    }

    handleSubmit() {
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({ username, content, createdTime: +new Date() })
        }
        this.setState({ content: '' })

    }

    handleUsernameBlur(event) {
        // this._saveUsername(event.target.value)
        this.props.saveData(event.target.value)
    }






    render() {
        return (

            <
            div className = 'comment-input' >

            <
            div className = 'comment-field' >
            <
            span className = 'comment-field-name' > 用户名： < /span> <
            div className = 'comment-field-input' >
            <
            input value = { this.state.username }
            onBlur = { this.handleUsernameBlur.bind(this) }
            onChange = { this.handleUsernameChange.bind(this) }
            /> <
            /div> <
            /div>

            <
            div className = 'comment-field' >

            <
            span className = 'comment-field-name' > 评论内容： < /span>

            <
            div className = 'comment-field-input' >
            <
            textarea ref = {
                (textarea) => this.textarea = textarea }
            value = { this.state.content }
            onChange = { this.handleContentChange.bind(this) }
            /> <
            /div>

            <
            /div>

            <
            div className = 'comment-field-button'
            onClick = { this.handleSubmit.bind(this) } >
            <
            button >
            发布 <
            /button> <
            /div>

            <
            /div>
        )

    }



}

CommentInput = wrapWithLoadData(CommentInput, 'username');

export default CommentInput