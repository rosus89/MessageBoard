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

//app use
const app = express();
app.use(express.json())
app.use(cors());
app.use('/user', userRoute)

// websockets
const server = http.createServer(app);
const io = new Server(server);



app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});