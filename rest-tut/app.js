const express = require('express');
 
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());
// Import Router
const postsRoute = require('./routes/posts'); 

//MongoDB URL
// var dbUrl = '';

//Middlewares
app.use('/posts', postsRoute);
app.use('/specific', postsRoute);
app.use('/test', postsRoute);

// app.use('/posts',(req,res)=>{
//     console.log('This is a middleware running');
// });


//Connect To DB
mongoose.connect(process.env.DB_CONNECTION,
    {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    },
() => {console.log('connected to DB!');}
);


//How to we start Listing to the server
const port = process.env.PORT || 3002;

app.listen(port,() => console.log(`server listen  on port:${port}`));
