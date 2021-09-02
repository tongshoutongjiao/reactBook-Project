import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'


// CommentInputContainer
// 负责用户名的加载、保存，评论的发布
class CommentInputContainer extends Component {
    static PropTypes={
        comments:PropTypes.array,
        onSubmit:PropTypes.func
    }

    constructor(){
        super();
        this.state={username:''}
    }

    componentWillMount () {
        // componentWillMount 生命周期中初始化用户名
        this._loadUsername()
      }
    

}