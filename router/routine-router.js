const express = require('express')
const router = express.Router(); 

let data = require('../response/routine'); 

router.get('/',(req,res)=>{
    if(!data){
        res.status(500).json({error: 'opps! an error occured, we will get back to you soon, sorry for the inconvenience'}); 
    }else{
        res.status(200).json(data); 
    }
})

router.get('/:day',(req,res)=>{
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

module.exports = router; 