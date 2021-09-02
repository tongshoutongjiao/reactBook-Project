import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentList from '../components/CommentList'
import { initComments,deleteComment } from '../reducers/comments'


// CommentListContainer
// 一个 Smart 组件，负责评论列表数据的加载、初始化、删除评论
// 沟通 CommentList 和 state

class CommentListContainer extends Component {
    static PropTypes={
        comments:PropTypes.array,
        initComments:PropTypes.func,
        onDeleteComment:PropTypes.func
    }

    componentWillMount () {
        // componentWillMount 生命周期中初始化评论
        this._loadComments()
    }
}