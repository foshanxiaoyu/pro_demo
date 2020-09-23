//  import userList from './dbModel';

const USER = require('./dbModel');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// var csurf = require('csurf')

// const Mgclint =require('mongoose').MongoClient;
const app = express();

app.use(bodyParser.json());

// var dbUrl = 'mongodb+srv://dev11:devlllooo999@cluster-yu.ixch7.gcp.mongodb.net/cluster-yu-shard-00-02.ixch7.gcp.mongodb.net:27017/sample_weatherdata';
var dbUrl = 'mongodb+srv://dev11:dev11@cluster-yu.ixch7.gcp.mongodb.net/cluster-yu-shard-00-02.ixch7.gcp.mongodb.net:27017/sample_weatherdata.user?retryWrites=true&w=majority';

//Connect to DB
mongoose.connect(dbUrl,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,

    },
    (err,client)=>{
        console.log('connected to DB!');
        // const db = client.db('sample_weatherdata');
     }
  );
    
// app.use('express.json()');
// import router

const authRouter = require('./router/auth');

// app.use(express.csrf());

//Router Middle
app.use('/api/userlist',(req,res) =>{
    const DB = mongoose.connection ;
    // const MyModel = mongoose.model('user', new userSchema({ name : String}));
    // const posts = MyModel.find().limit[2];
    const posts = DB.collection('user').find();
    console.log(posts);
    // const userlist = new mongoose.Schema('user',userSchema);

    // const User = sample_weatherdata.user;
    // const userlist = new sample_weatherdata.user;
    res.send('userlist2333');
    // const posts =  USER.find().limit[5];
    res.json(posts);
    res.status(200).bodyParser.json(posts);
});



app.post('/api/post1',(req,res) => {
    // const dbusers = req.body;
    // const db = 
    res.send('User');
    // res.json(User.find());
    // User.find({}).toArray(function(err, todos) {
    //     if (!err) {

    //       // write HTML output
    //       var output = '<html><header><title>Todo List from DB</title></header><body>';
    //       output += '<h1>TODO List retrieved from DB</h1>';
    //       output += '<table border="1"><tr><td><b>' + 'Description' + '</b></td><td><b>' + 'Details' + '</b></td></tr>';

    //       // process todo list
    //       todos.forEach(function(todo){
    //         output += '<tr><td>' + todo.description + '</td><td>' + todo.details + '</td></tr>';
    //       });

    //       // write HTML output (ending)
    //       output += '</table></body></html>'

    //       // send output back
    //       res.send(output);

    //       // log data to the console as well
    //       console.log(todos);
    //     }
    //   });

      // close db client
    //   client.close();
    


    // User.create(dbusers,(err,data) =>{
    //     if(err){
    //         res.status(500).send(err);
    //     } else {
    //         res.status().send(data);
    //     }
    // })
})







const port = 5564;

app.listen(port,() => console.log(`server listen  on port:${port}`))