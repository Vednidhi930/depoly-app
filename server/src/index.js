import dotenv from "dotenv";
import connectDb from "./db/db.js";
import { app } from "./app.js";
import chalk from "chalk";
import { createServer } from "http";
import { Server } from "socket.io"

dotenv.config({path:"./env"});


// http server 
const server=createServer(app)

// Io websocket server
const io=new Server(server,{
  cors:{
    origin:"http://localhost:5173",
    methods:["GET","POST"],
    credentials:true,
  }
})

// IO server on

io.on("connection",(socket)=>{
    console.log(`user is connected with this Id ${socket.id}`)
  
    socket.on("message",({message,room})=>{
       console.log(data)
      // io.emit("receive-message",data)
      io.to(room).emit("receive-message",message)
    })

    // socket.on("join-room",(room)=>{
    //   socket.join(room)
    //   console.log(chalk.blue(`User joined this room ->  ${room}`))
    // })
})


connectDb()
.then(()=>{
    server.listen(process.env.PORT || 9000 ,()=>console.log(chalk.white(`server is running at port ${process.env.PORT}`)))
})
.catch((err)=>{console.log("Database connection Failed",err)});
