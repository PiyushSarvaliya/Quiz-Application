const express = require("express");
const connect = require("./config/db");
const quizRoute = require("./routes/Quiz.route");
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true }))
require("dotenv").config()

app.use("/quiz", quizRoute)

app.listen(process.env.PORT , ()=>{
    connect()
    console.log(`port is strat ${process.env.PORT}`)
})


