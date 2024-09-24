import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, increaseCounter } from '../Store/Slices/counterSlice'

const Counter = () => {

    const Ivalue= useSelector((state)=>state.counters)
    const dispatch=useDispatch()


  return (
    <>
       <div className='w-full bg-white justify-center items-center flex h-[100vh]'>
          <div className='w-[20rem] border-2 border-black p-5 h-[10rem]' >
          <button onClick={()=>dispatch(increaseCounter())} className='w-20 h-6 bg-blue-500 '>+</button>
              <h1 className="text-2xl">{Ivalue}</h1>
              <button onClick={()=>dispatch(decreaseCounter())}  className='w-20 h-6 bg-blue-500 '>-</button>
          </div>
       </div>
    </>
  )
}

export default Counter
