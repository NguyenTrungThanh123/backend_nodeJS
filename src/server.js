require('dotenv').config()

const express = require('express');
const app = express()
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const port = process.env.PORT || 8888
const localhost = process.env.HOST_NAME;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//config template engine
configViewEngine(app)

//config static files
//routes 
app.use('/', webRoutes)

//test  connections 




//connect pool patterns


app.listen(port, localhost, () => {
    console.log(`Example app listening on port ${port}`)
})  