import React, { useEffect, useMemo, useState } from 'react'
import {io} from "socket.io-client"
import connectDb from '../../../../server/src/db/db'

const SocketIO = () => {
const[message,setMessage]=useState("")
const[show,setShow]=useState([])
const[room,setRoom]=useState("")
const[socketid,setSocketid]=useState("")
const[roomName,setRoomName]=useState("")




  const socket=useMemo(()=> io("http://localhost:8080"),[])
  

  const handleCLick=(e)=>{
    e.preventDefault()

    socket.emit("message", {message,room})
    setMessage("")
  }


  const handleJoinRoom=(e)=>{
    e.preventDefault()
    socket.emit("join-room",roomName)
    setRoomName("")
  }

  useEffect(()=>{

    socket.on("connect",()=>{
      setSocketid(socket.id)
    })


   socket.on("receive-message",(data)=>{
    console.log(data)
    // setShow((prev)=>[...prev,data])
   })
   
  },[])

  // console.log(socketid)

  return (
    <>
    <div className='w-full bg-white h-[100vh] flex flex-col items-center gap-3 justify-center'>
      <h1 className='text-xl text-black'>UserId:<span className='text-red-500'>{socketid}</span></h1>

       {/* <input className='h-10 bg-slate-200 outline-none p-2 w-[30rem] border-black border-2' onChange={(e)=>setRoomName(e.target.value)} name='roomName' value={roomName} type='text' placeholder='Enter a Room name'/>
       <button onClick={handleJoinRoom} className='w-[10rem] rounded-full h-[2.5rem] text-white bg-blue-500'>Join</button> */}
       <input className='h-10 bg-slate-200 outline-none p-2 w-[30rem] border-black border-2' onChange={(e)=>setMessage(e.target.value)} name='message' value={message} type='text' placeholder='Enter a message'/>
       <input className='h-10 bg-slate-200 outline-none p-2  w-[30rem] border-black border-2' onChange={(e)=>setRoom(e.target.value)} value={room} type='text' placeholder='Enter a roomId'/>
       <button onClick={handleCLick} className='w-[10rem] rounded-full h-[2.5rem] text-white bg-green-500'>Send</button>
       {
        show.map((curr,i)=><div key={i} className='text-md w-fit text-wrap p-1 my-2  h-10 rounded-full ps-2  border-2 bg-blue-500 font-bold text-white font-sans'>{curr}</div>)
      }


       </div>
    </>
  )
}

export default SocketIO
