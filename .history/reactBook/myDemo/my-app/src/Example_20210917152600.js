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
    <ThemeContext.Provider value={themes.dark}>

    </ThemeContext.Provider>
   



}








export default Example;