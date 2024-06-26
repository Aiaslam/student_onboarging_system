const express= require('express')
let app=express()

app.get('/user',(req,res)=>{
    let user=req.params()
    res.send('user')
})

app.listen()