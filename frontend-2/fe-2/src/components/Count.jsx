import {useContext} from 'react'
import { counterContextObj } from '../context/ContextProvider'

function Count() {
  const { counter, increment, decrement} = useContext(counterContextObj)

  return (
    <div className='text-center p-10 bg-pink-600 mb-3'>
      <h1 className="text-4xl text-white font-bold mb-3">Counter: {counter}</h1>
      <div className="flex justify-center gap-4">
        <button 
          onClick={increment} 
          className='bg-amber-300 p-5 rounded-2xl font-bold'
        >
          +
        </button>
        <button 
          onClick={decrement} 
          className='bg-amber-300 p-5 rounded-2xl font-bold'
        >
          -
        </button>
  
      </div>
    </div>
  )
}

export default Count