import React,{ useState,useEffect } from 'react'

function Example(){
    // const [count,setCount]=userState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return <div>
        <div>You clicked {count} times</div>
        <button onClick={()=>{setCount(count+1)}} >click me</button>


    </div>



}

function useFriendStatus(friendID){
    const [isOnline,setIsOnline]=useState(null);

    useEffect(() => {
        function handleStatusChange(status){
            setIsOnline(status.isOnline);
        }
      

        
    });




}








export default Example;