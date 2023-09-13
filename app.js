const express = require('express')
const CONFIG = require ('./config/config')

const app = express()

require('./db/mongoDb').connectToMongoDB()

const personRoute = require('./routes/person')


app.use(express.urlencoded({ extended: false }));
app.use(express.json())


app.use('/api', personRoute)

app.get('/', (req,res) => {
    
    res.send({
        message : "Personify API!"
    })
})

app.listen (CONFIG.PORT || 8300, () => {
    console.log(`Server 1 succesfully started on port : ${CONFIG.PORT}`)
})