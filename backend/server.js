const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true})

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('DB connected')
})

const exeRouter = require('./routes/exercises');
const userRoute = require('./routes/users');

app.use('/exercise',exeRouter)
app.use('/users',userRoute)

app.listen(port,()=>{
    console.log("Server is listening at port "+port);
})