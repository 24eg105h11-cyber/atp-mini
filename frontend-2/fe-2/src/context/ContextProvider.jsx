import { createContext, useState } from "react"

export const counterContextObj=createContext()

function ContextProvider({ children }) {
  const [counter, setCounter] = useState(0);

  // function to increment counter
  const increment = () => {
    setCounter(counter=> counter + 1);
  };

  // function to decrement counter
  const decrement = () => {
    setCounter(counter => counter - 1);
  };

  // function to reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <counterContextObj.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider  