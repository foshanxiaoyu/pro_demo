// pullJson
const express = require('express');
const router = express.Router();
const dataJosns = require('../collor/dataJosns');

// Get dataList all
router.get('/api/datalist',(req,res)=>{
    res.json(dataJosns);
});


//Get  Datalist of Single
router.get('/api/datalist/:id',(req,res)=>{
    const found = dataJosns.some(dataJosn => dataJosn.id === parseInt(req.params.id));

    if (found){

        // res.json(req.params.id);
        res.json(dataJosns.filter(dataJosn => dataJosn.id === parseInt(req.params.id)));
        // res.send(req.params.id);
        // dataJson.filter(id));
    }else{
        res.status(400).json({msg:'Not found'});
    }
});


module.exports = router;