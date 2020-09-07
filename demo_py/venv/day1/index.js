const express = require('express');
const app = express();

const logger = require('./collor/logger');

const path = require('path');
const pullJson = require('./collor/pullJson');


// Init middleware
app.use(logger);

app.use(pullJson);

app.get('/',(req,res)=>{
    res.sendfile(path.join(__dirname,'public','index.html'));
    // ('<h1>the is age.</h1>');
});

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

app.get('/api/cou',(req,res)=>{
    res.send('<h1>/api/cou</h1>');
});




const port = process.env.PORT || 7700 ;

app.listen(port, () => console.log(`Server started port on :${port}`));
