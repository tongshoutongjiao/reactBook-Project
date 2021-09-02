import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import ContextApp from './context'
import './index.css';

class Title extends Component {

  handleClickOnTitle (e,text) {
    console.log(this);
    console.log(text);
    console.log(e)
    console.log(text.target.innerHTML)
  }
  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this,'Hello')}>React 小书</h1>
    )
  }
}


class Header extends Component {
  render () {
    return (
    <div>
      <Title />
      <h2>This is Header</h2>
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main content</h2>
    </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
    <div>
      <h2>This is footer</h2>
    </div>
    )
  }
}

// class Index extends Component {


  
//   render () {
//     return (
//       <div>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     )
//   }
// }

// class AutoFocusInput extends Component {
//   componentDidMount () {
//     this.input.focus()
//   }
//   render () {
//     return (
//       <input ref={(input) =>{
//         console.log('查看input');
//         console.log(input)
//         this.input = input} } />
//     )
//   }
// }




// class Card extends Component {
//   render () {
//     console.log(this.props)
//     console.log(this.props.children)
//     return (
//       <div className='card'>
//         <div className='card-content'>
//           {this.props.children}
//         </div>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
  
//   <Card> 
//     <div>
//       <h2>React.js 小书</h2>
//        <div>开源、免费、专业、简单</div>
//       订阅：<input />
//       <div>嘿嘿嘿</div>
//     </div>
//     </Card>,
//   document.getElementById('root')
// )








// ReactDOM.render(<AutoFocusInput></AutoFocusInput>,
//   document.getElementById('root')
//   )



ReactDOM.render(<ContextApp></ContextApp>,
  document.getElementById('root')
  )

// ReactDOM.render(<CommentApp></CommentApp>,
//   document.getElementById('root')
//   )