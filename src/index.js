const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()

const suppliersRoutes = require('./routes/suppliers')
const welcomeRoutes = require('./routes/welcome')

const app =  express()
const port = process.env.PORT || 9000

//middleware
app.use(cors());
app.use(express.json())
app.use('/api', suppliersRoutes)
app.use('/api', welcomeRoutes)

//mongodb connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.CONNECTION_DB)
.then(() => {console.log('connected to mongodb')})
.catch((error) => {console.error(error)})

//routes
app.get('/', (req, res) => {
    res.send('API Gapsi')
})

app.listen(port, () => console.log('server listening on port', port))

