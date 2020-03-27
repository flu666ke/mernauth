const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// connect to db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB connection ERROR: ', err))

// import routes
const authRoutes = require('./routes/auth')

// app middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
// app.use(cors()) // allow all origins
if (process.env.NODE_ENV = 'development') {
    app.use(cors({ origin: `http://localhost:3000` }))
}

// middleware
app.use('/api', authRoutes)


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`API is runnning on port ${port} - ${process.env.NODE_ENV}`)
})


// oM3UwtaiAawvpQH1

// mongodb+srv://fluke:oM3UwtaiAawvpQH1@cluster0-jjuq4.mongodb.net/test?retryWrites=true&w=majority