const path = require("path")
const http = require("http")
const express = require('express')
const soceketIO = require("socket.io")
const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000

const publicpath = path.join(__dirname, '../public');
app.use(express.static(publicpath))
const io = soceketIO(server)
io.on('connection', (socket:any) => {
    console.log(`new user connected ${socket}`)
})
io.on('dicconnection', (socket:any) => {
    console.log(`new user disconnected ${socket}`)
})
server.listen(port, () => console.log(`App listening on port ${port}!`)) 