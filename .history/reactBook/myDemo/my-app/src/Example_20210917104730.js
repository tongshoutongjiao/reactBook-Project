import React,{ userState } from 'react'

function Example(){
    // const [count,setCount]=userState(0);
    const [count, setCount] = useState(0);

    return <div>
        <div>{'hahahah '+count}</div>
        <button >点击测试函数组件</button>


    </div>



}

export default Example;