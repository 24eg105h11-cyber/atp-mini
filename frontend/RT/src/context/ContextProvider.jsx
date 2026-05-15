import { createContext, useState } from "react"

export const counterContextObj=createContext()

function ContextProvider({ children }) {
    const [counter,setCounter]=useState(10);
    const [counter1,setCounter1]=useState(20);
    //function to change state
    const changeCounter=()=>{
        setCounter(counter=>counter+1)
    };  
    const changeCounter1=()=>{
      setCounter1(counter=>counter+1)
    };
  return (
    <counterContextObj.Provider value={{counter,counter1,changeCounter,changeCounter1}}>
        {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider