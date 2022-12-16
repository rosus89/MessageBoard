const mongoose = require("mongoose")

mongoose.set("debug", true);
mongoose.set('strictQuery', true);
mongoose.Promise = Promise;

mongoose.connect(process.env.DATABASE, {
    keepAlive: true,
    serverSelectionTimeoutMS: 3000
})
.then(()=>{
    console.log("Database connected successfully.")
})
.catch((err)=>{
    console.log("Database connection failed.")
    console.log(err)
})

exports.User = require('./models/user')
exports.Post = require('./models/post')
exports.Board = require('./models/board')