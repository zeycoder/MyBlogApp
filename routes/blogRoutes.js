const express = require('express'),
      Blog    = require('../models/blogModel'),
      router  = express.Router();



router.get("/addNewBlog",(req,res)=>{
    res.render('blog/newBlog');
});

router.post("/addNewBlog",(req,res)=>{
    let title = req.body.blogTitle;
    let comSentence = req.body.comSentence;
    let comImage = req.body.comImage;
    let blog = req.body.editor;

    let newBlog = { title:title,comSentence:comSentence, comImage:comImage, blog:blog };
    
    Blog.create(newBlog)
    .then((newBlog)=>{
        console.log(newBlog);
        res.status(201).json(newBlog);
    })
    .catch((err)=>{
        console.log("***ERROR = 404 NOT FOUND***");
        console.log(err);
        res.send(err);
    });

});

module.exports = router;