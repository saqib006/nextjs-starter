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

    mongoose.connect('mongodb://saqib:saqib123@ds133627.mlab.com:33627/assign')
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
        saveUninitialized:false,
        resave:false
        
    }))
    server.use(passport.initialize())
    server.use(passport.session())

    server.use(cors())
    server.use('/auth', userRoute)
    

    server.get('/contact', (req, res) => {
        return app.render(req, res, 'contact', req.query)
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
