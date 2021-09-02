
//  接收数据和改变数据的方法，返回数据和修改数据的才做方法
function createStore(state,stateChanger){

  const listeners=[];

  const subscribe=(listener)=>listeners.push(listener)

  const getState=()=>state;

  const dispatch=(action)=> {
       state= stateChanger(state,action);
        listeners.forEach((listener)=>listener())
  }
  return {getState,dispatch,subscribe}
}



let appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}

function stateChanger(action,state) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            // state.title.text = action.text;
            return {
              ...state,
              title:{
                ...state.title,
                text:action.text
              }
            }


            break
        case 'UPDATE_TITLE_COLOR':
            // state.title.color = action.color;
            return {
              ...state,
              color:action.color
            }
            break
        default:
           return state
    }
}



const store = createStore(appState, stateChanger)
store.subscribe(() => renderApp(store.getState()))


function renderApp(newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) return // 数据没有变化就不渲染了
    renderTitle(newAppState.title,oldAppState.title)
    renderContent(newAppState.content,oldAppState.content)
}

function renderTitle(newTitle,oldTitle) {
  if (newTitle === oldTitle) return // 数据没有变化就不渲染了
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent(content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}
renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// renderApp(store.getState()) // 把新的数据渲染到页面上