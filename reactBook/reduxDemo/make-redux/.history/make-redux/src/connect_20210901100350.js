import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

export const connect=(mapStateToProps,mapDispatchToProps) =>(WrapperComment)=>{
    class Connect extends Component {
        static contextTypes={
            store:PropTypes.object
        }

        constructor(){
            super()
            this.state={allProps:{}}
        }

        componentWillMount () {
            const { store } = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }

        _updateProps () {
            const { store } = this.context
            let stateProps =mapStateToProps? mapStateToProps(store.getState(), this.props):{} // 额外传入 props，让获取数据更加灵活方便

            let dispatchProps=mapDispatchToProps?mapDispatchToProps(store.dispatchProps,this.props):{} // 防止 mapDispatchToProps 没有传入





            this.setState({
              allProps: { // 整合普通的 props 和从 state 生成的 props
                ...stateProps,
                ...dispatchProps,
                ...this.props
              }
            })
          }



        render(){
            const {store}=this.context;
            let stateProps=mapStateToProps(store.getState())
            return <WrapperComment {...this.state.allProps}></WrapperComment>
        }
    
    
    }
    return Connect

 
}


