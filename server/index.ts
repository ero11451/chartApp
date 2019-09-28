const path = require("path")
const http = require("http")
const express = require('express')
const soceketIO = require("socket.io")
const app = express()
const port = process.env.PORT || 3000


const server = http.createServer(app)
// const io = soceketIO(server)
// io.on('connection', (socket:any) => {
// // new change made to the file
//    io.on("createMessage",(message:any)=>{
//          socket.emit("newmessage",
//          { 
//              from:message.from,
//              to:message.to,
//              message:message.message
//          })
//     })
  
// })
// io.on('dicconnection', (socket:any) => {
//     console.log(`new user disconnected `)
// })
const publicpath = path.join(__dirname, '../public');
app.use(express.static(publicpath))

server.listen(port, () => console.log(`App listening on port ${port}!`)) 