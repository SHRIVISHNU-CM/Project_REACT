require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models/dbconnection')
const router = require('./routes/routes')
db()
app.use(express.json())
const PORT = 3005 || 5001

app.use('/api',router)

app.listen(PORT,()=>console.log(`Server runnin at ${PORT}`))
