require('dotenv').config();
require("./db");
const PORT = process.env.PORT || 3001;
const express = require("express");
const http = require('http');
const { Server } = require("socket.io");
const bcrypt = require('bcrypt')
const cors = require("cors")

// routes
const userRoute = require('./routes/users')
const boardRoute = require('./routes/board')
const postRoute = require('./routes/post') 

//app use
const app = express();
app.use(express.json())
app.use(cors());
app.use('/user', userRoute)
app.use('/board', boardRoute)
app.use('/post', postRoute)

// websockets
const server = http.createServer(app);
const io = new Server(server);
// io.on('connection', (socket) => {
//   console.log('A client has connected');

//   // Listen for messages from the client
//   socket.on('message', (message) => {
//     console.log(message);

//     // Send a message back to the client
//     socket.emit('message', {data: 'Hello from the server!'});
//   });
// });


server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});