const express = require('express'); 
const app = express(); 

const routineRouter = require('./router/routine-router');

app.use('/api/routine',routineRouter);

app.listen(2000,()=>{
    console.log('connected to port 2000..');
})