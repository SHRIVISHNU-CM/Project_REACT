require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models/dbconnection')

db()

const PORT = 3005 || 5001



app.listen(PORT,()=>console.log(`Server runnin at ${PORT}`))
