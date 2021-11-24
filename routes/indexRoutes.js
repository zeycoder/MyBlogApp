const express = require('express'),
      Blog    = require('../models/blogModel'),
      router  = express.Router();


// let data =[
//     {
//         postTitle: "Blog Denemesi",
//         postSubTitle: "Bu ilk blog denemesi ve bakalım ne olacak ?",
//         image: "https://images.unsplash.com/photo-1637499202942-1a9863fa65bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//     },
//     {
//         postTitle: "Testing a blog",
//         postSubTitle: "This is a blog testing",
//         image: "https://images.unsplash.com/photo-1637446840512-7134deed4dcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80"
//     },
//     {
//         postTitle: "Squid Game",
//         postSubTitle: "'Squid Game' is a good korean drama",
//         image: "https://images.unsplash.com/photo-1637489981573-e45e9297cb21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
//     }
// ];


router.get("/",(req,res)=>{
    Blog.find({},(err,foundBlogs)=>{
        if(err){
            console.log("***ERROR = 404 NOT FOUND***");
            console.log(err);
        }
        else{
            console.log("***ALL BLOGS***");
            console.log(foundBlogs);
            res.render("home",{foundBlogs:foundBlogs});
        }
    });
    
});

router.get("/about",(req,res)=>{
    res.render("about");
});

router.get("/contact",(req,res)=>{
    res.render("contact");
});

router.get("/resume",(req,res)=>{
    res.render("resume");
});


module.exports = router;