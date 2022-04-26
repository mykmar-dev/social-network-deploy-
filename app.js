const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer')
const path = require('path')
const app = express()
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/users')
const profileRoutes = require('./routes/profile')
const authRoutes = require('./routes/auth')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, filter');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'images')))
app.use(express.static(path.join(__dirname, 'build')))
app.use(multer().single('image'))
app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
app.use(userRoutes)

app.use((error, req, res, next) => {
    const status = error.statusCode || 500
    res.status(status).json({
        message: error.message,
        resultCode: 1
    })
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.5m7db.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
    .then(res => {
        const server = app.listen(process.env.PORT || 8080)
    })
    .catch(err => console.log(err))


