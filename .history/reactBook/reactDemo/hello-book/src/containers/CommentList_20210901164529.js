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

    _loadComments () {
        // 从 LocalStorage 中加载评论
        let comments = localStorage.getItem('comments')
        comments = comments ? JSON.parse(comments) : []
        // this.props.initComments 是 connect 传进来的
        // 可以帮我们把数据初始化到 state 里面去
        this.props.initComments(comments)
    }
}