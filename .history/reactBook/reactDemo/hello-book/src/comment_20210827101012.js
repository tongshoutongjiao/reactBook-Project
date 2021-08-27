import React,{Component} from 'react'


export default class Comment extends Component {
    

    render(){

        console.log('查看当前评论的内容')
        console.log(this.props.comment)




        return (
            <div className='comment'>
             <div className='comment-user'>
                <span>{this.props.comment.username} </span>：
             </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }

}

