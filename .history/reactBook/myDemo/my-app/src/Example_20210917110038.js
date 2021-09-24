import React,{ useState } from 'react'

function Example(){
    // const [count,setCount]=userState(0);
    const [count, setCount] = useState(0);

    return <div>
        <div>You clicked {count} times</div>
        <button onClick={()=>{setCount(count+1)}} >click me</button>


    </div>



}

export default Example;