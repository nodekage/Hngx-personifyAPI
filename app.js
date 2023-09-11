const express = require('express')
const CONFIG = require ('./config/config')

const app = express()



app.get('/', (req,res) => {
    res.send({
        message : "Personify API!"
    })
})

app.listen (CONFIG.PORT, () => {
    console.log(`Server succesfully started on port : ${CONFIG.PORT}`)
})