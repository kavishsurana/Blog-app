const express = require('express')
const mongoose = require('mongoose')

mongoose.set("strictQuery", false)

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/blogapi',{
    
},() => {
    console.log("connection to mongodb data was sucessfull")
})

//middlleware
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.set("view engine" , "ejs")


// routers
app.use(require("./routers/index"))
app.use(require("./routers/compose"))
app.use(require("./routers/blog"))




app.listen(3000 , () => {
    console.log("Server is started on port 3000")
})