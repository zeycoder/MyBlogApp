const mongoose      = require("mongoose"),
      express       = require("express"),
      passport      = require("passport"),
      LocalStrategy = require("passport-local"),
      expressSession=require("express-session"),
      User          =require("./models/userModel"),
      bodyParser    = require("body-parser"),
      app           = express();


//Routes
const indexRoutes = require("./routes/indexRoutes"),
      adminRoutes = require("./routes/adminRoutes");  



//App Config
try {
mongoose.connect("mongodb://localhost:27017/BlogApp");
    
} catch (error) {
    console.log(error)
}
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//Passport Config
app.use(require("express-session")({
    secret:"bu bizim güvenlik cümlemizdir.",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//Routes Using
app.use(indexRoutes);
app.use(adminRoutes);



const server = app.listen(3000,(err)=> {
    if(err){
        console.log(err);
    }
    console.log('App started. Port number : %d ',server.address().port)
})