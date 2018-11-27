const express = require('express');
const next = require('next');
const userRoute = require('./routes/auth');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passportSetup = require('./config/passport');
const passport = require('passport');
const uuid = require('uuid/v4');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const bodyParser = require('body-parser');
const app =  next({dev})
const handle = app.getRequestHandler();

app.prepare().then(()=>{

    mongoose.connect('mongodb uri')
    mongoose.connection.once('open',()=>{
    console.log('connection starting')
    }).on('error', (error)=>{
    console.warn('connection error', error)
    })

    const server = express()
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({extended:true}))
    server.use(cookieParser())
    server.use(session({
        genid: (req)=>{
            return uuid();
        },
        secret:"hello next",
        saveUninitialized:true,
        resave:true
        
    }))
    server.use(passport.initialize())
    server.use(passport.session())

    server.use(cors())
    server.use('/auth', userRoute)
    //server.use('/', isAuthenticate, profileRoute(app))

    function isAuthenticate(req, res, next){
        if(req.isAuthenticated()){
            return next();
        } else {
            res.redirect('/');
        }
    }

    server.get('/profile', isAuthenticate, (req, res) => {
        console.log('user',req.user)
        app.render(req, res, '/profile')
    })

    server.get('/login', (req, res) => {
        if(req.user){
            res.redirect('/profile')
        }
        else{
            app.render(req, res, '/login')
        }
        
    })
    
    server.get('/register', (req, res) => {
        if(req.user){
            res.redirect('/profile')
        }
        else{
            app.render(req, res, '/register')
        }
        
    })

    server.get('*', (req, res) => {
        return handle(req, res)
      })

    server.listen(PORT, err => {
        if(err) throw err;
        console.log(`Ready on ${PORT}`);
    });
})
.catch(ex=>{
    console.error(ex.stack);
});
