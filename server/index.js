const express = require('express');
const userRouter = require('./routers/user.js');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());//Parse all requests

app.use('/api/user', userRouter); //left side path will bring you to right side router
//api/user will take you to userRouter

app.listen(3000, ()=> {
    console.log('OTM Server is running on Port 3000');
});

