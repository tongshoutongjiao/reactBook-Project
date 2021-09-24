import React,{ useState,useEffect } from 'react'

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext(themes.light);



  

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








export default Example;