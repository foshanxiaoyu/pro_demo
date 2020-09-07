const express = require('express');
const router = express();
router.post('/register',(req,res)=>{
    res.send('hi');
});

router.post('/login');




module.exports = router;