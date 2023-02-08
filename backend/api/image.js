const express = require('express')
const router = express.Router()

const path = require('path')
const getColors = require('get-image-colors')
let colors

router.get('/',(req,res,next)=>{
    
    res.status(200).json({
        message:colors
    })
})

router.post('/',(res,req)=>{
    res.render(colors)
})

module.exports = router