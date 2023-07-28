const app = require('express')();
const { json } = require('express');

let data = require('./response/routine')

app.get('/api/routine',(req,res)=>{
    if(!data){
        res.status(500).json({error: 'opps! an error occured, we will get back to you soon, sorry for the inconvenience'}); 
    }else{
        res.status(200).json(data); 
    }
})

app.get('/api/routine/:day',(req,res)=>{
    if(!data){ 
        res.status(500).json({error: 'opps! an error occured, we will get back to you soon, sorry for the inconvenience'}); 
    }else{
        const day = req.params.day.toLowerCase();
        if(!day || !data[day]){
            res.status(500).json({error: `opps! No routine found for '${day}'. please, consider rechecking your spelling`}); 
        }else{
            res.status(200).json(data[day]);
        }
    }
})

app.listen(2000,()=>{
    console.log('connected to port 2000..');
})