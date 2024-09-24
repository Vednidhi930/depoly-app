import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

    const searchQuery=useSearchParams()[0]
    const referceNo=searchQuery.get("reference")
  return (
    <> 
        <div className='w-full bg-white h-[100vh] flex flex-col justify-center items-center gap-3'>
             <h1 className='text-4xl text-black font-bold'>order Successfull</h1>
             <h1 className='text-xl text-red-500 font-serif'>Your Reference No - {referceNo}</h1>
        </div>
    </>
  )
}

export default PaymentSuccess
