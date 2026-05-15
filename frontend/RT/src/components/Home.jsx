import {useContext} from 'react'
import {counterContextObj} from '../context/ContextProvider'
import { useCounterStore } from '../store/CounterStore'
function Home() {
  let newCounter=useCounterStore((state)=> state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter)
  const {counter,counter1,changeCounter,changeCounter1}=useContext(counterContextObj)
  
  return (
    <div className='text-center p-10'>
        <h1 className="text-4xl ">Counter: {counter}</h1>
        <button onClick={changeCounter} className='bg-amber-300 p-5 rounded-2xl ml-2 mt-4 text-center'>Change</button>
        <h1 className="text-4xl mt-10">Counter: {counter1}</h1>
        <button onClick={changeCounter1} className='bg-amber-300 p-5 rounded-2xl ml-2 mt-4 text-center'>Change</button>
        <h1 className="text-4xl mt-10">NewCounter: {newCounter}</h1>
        <button onClick={incrementCounter} className='bg-amber-300 p-5 rounded-2xl ml-2 mt-4 text-center'>NewChange</button>
    </div>
  )
}

export default Home