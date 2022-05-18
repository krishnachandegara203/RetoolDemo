const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const app =express()
require('./models/db')

app.use(express.json())
app.use(cors())
app.use('/users',router)
app.listen('8000',err => {
    if(err) console.log(err)
    console.log('server is running on port 8000');
})