import React from 'react'

const Circle = () => {

    const name="Harsh"
    const short_name=name.slice(0,2).toUpperCase()

  return (
    <>
       <div className='bg-black w-full h-[100vh] flex justify-center items-center'>
           <div className='w-[12rem] flex justify-center items-center h-[12rem] rounded-full bg-sky-500'>
                <h1 className='font-bold text-8xl text-white'>{short_name}</h1>
           </div>
       </div>
    </>
  )
}

export default Circle
