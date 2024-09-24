import React from 'react'
import Chance from "chance"
import getdata from '../dummyData/dummydata'
import { useDispatch } from 'react-redux'
import { addUser } from '../Store/Slices/testSlice'
import { useSelector } from 'react-redux'


const TestReduxToolit = () => {

    const data=useSelector((state)=>state.users)
    console.log(data)

    const dispatch=useDispatch()
    
    function handleClick(dummydata){
      dispatch(addUser(dummydata))
    }

  return (
    <>
      <div className='w-full font-bold bg-white flex-col gap-2 text-red-500 text-xl h-[100vh] flex justify-center items-center'>
          <button onClick={()=>handleClick(getdata())} className='w-40 bg-blue-500 text-white h-16  rounded-full'>Add user</button>
          {
            data.map((curr,i)=><p key={i}>{curr}</p>)
          }
      </div>
    </>
  )
}

export default TestReduxToolit
