const express = require('express');
 
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());
// Import Router
const postsRoute = require('./routes/posts'); 

//MongoDB URL
// var dbUrl = 'mongodb+srv://dev11:dev11@cluster-yu.ixch7.gcp.mongodb.net/cluster-yu-shard-00-02.ixch7.gcp.mongodb.net:27017/sample_weatherdata.user?retryWrites=true&w=majority';

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