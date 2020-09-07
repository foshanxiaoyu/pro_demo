//  import userList from './dbModel';

const userLsit = require('./dbModel')
const express = require('express');
const mongoose = require('mongoose');

// const Mgclint =require('mongoose').MongoClient;
const app = express();

var dbUrl = 'mongodb+srv://dev11:devlllooo999@cluster-yu.ixch7.gcp.mongodb.net/cluster-yu-shard-00-02.ixch7.gcp.mongodb.net:27017/sample_weatherdata.user';
// var dbUrl = 'mongodb+srv://dev11:dev11@cluster-yu.ixch7.gcp.mongodb.net/cluster-yu-shard-00-02.ixch7.gcp.mongodb.net:27017/sample_weatherdata.user?retryWrites=true&w=majority';

//Connect to DB
mongoose.connect(dbUrl,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,

    },
    ()=>{console.log('connected to DB!');}
           
    );
    
    // var server=new mongodb.Server(dbUrl,27017,{auto_reconnect:true});

    // var db = new mongoose.Db('user',server,{safe:true});
    const datasrc = Db.user.find();
    
// conn.on('open', () => {console.log('打开 mongodb 连接')});

// conn.on('err', (err) => {console.log('err:' + err)});


// import router
const authRouter = require('./router/auth');


//Router Middle
app.use('/api/userlist',(req,res) =>{
    const dataTable = 
    res.status(200).send('秀梅usertb');
});

app.post('/api/post1',() => {
    const dbusers = req.body;
    userList.create(dbusers,(err,data) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status().send(data);
        }
    })
})







const port = 5526;

app.listen(port,() => console.log(`server listen  on port:${port}`))