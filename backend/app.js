const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const url= 'http://palett.es/API/v1/palette'
let hasError = false

var corOptions = {
    origin : 'http://palett.es/API/v1/palette'
}
app.use(cors(corOptions))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    hasError = false
    fetch(url)
    .then(res=> res.json())
    .then(obj=>console.log(obj))
    .catch(error=>{
        hasError = true
        console.log(error)
    })
    res.render("home")
})

app.post("/uploadImage",(req,res)=>{
    console.log(fileaddr)
})

app.get("/uploadImage",(req,res)=>{
    console.log(palette)
    res.render("ImagetoPalette")  
})

app.post("/ImagetoPalette",(req,res)=>{
    res.send(palette)
})

module.exports = app