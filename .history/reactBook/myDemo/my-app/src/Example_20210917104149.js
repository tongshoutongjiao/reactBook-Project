import React,{userState} from 'react'

function Example(){
    const [count,setCount]=userState(0);

    return `<div>
        <div>{count}</div>
        <button onClick={()=>{setCount(count+1)}}></button>


    </div>`



}

export default Example;