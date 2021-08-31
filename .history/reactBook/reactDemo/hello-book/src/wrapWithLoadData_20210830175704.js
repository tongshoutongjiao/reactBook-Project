import React,{Component} from "react"

export default (WrappedComponent,name)=>{
    class LocalStorageActions extends Component{
        constructor(){
            super()
            this.state={
                data:null
            }
        }
        componentWillMount(){
            let data=localStorage.getItem(name);
            try{
                // 解析成json 对象
                this.setState({data:JSON.parse(data)})

            }catch(e){
                // 如果出错就当普通字符串读取
                this.setState(data)

            }
        }


    }

}