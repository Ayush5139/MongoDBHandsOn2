const mongodb = require("mongodb")
const express = require("express")
const { route } = require("./routes/route")

const app = express()
app.use(express.json())
app.use(route)

app.get("/",(req,res)=>{
    res.send("Honme page")
})

app.listen(9000,()=>{
    console.log("appp runninig on 9000")
})