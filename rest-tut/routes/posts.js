const express = require('express');

const router = express.Router();

const Post = require('../moduls/Post');

//Routes
// app.get('/',(req,res) => {
//     res.send("we are on home");
// }
// );
router.get('/',async(req,res) =>{

    // res.send('We are on posts');
    try{
        const posts = await Post.find().limit[5];
        res.json(posts);
    }catch(err){
        res.json({ message : err });
    }
});
//当前根目录下的子目录
router.get('/specific',(req,res) => {
    res.send("Space post");
});

//当前根目录下的子目录,get for ID
router.get('/:postId',async(req,res)=>{
    // console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
        } catch(err){
        res.json({ message : err });
    }
});

//POST THE DATE
router.post('/test',async(req,res) => {
    console.log(req.body);
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });

   try{
    const savedPost = await post.save();
    res.json(savedPost);
   } catch(err) {
     res.json({ message : err });
    }
})

module.exports = router;
