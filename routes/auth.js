const routes = require('express').Router();
const passport = require('passport');
const User = require('../model/user');

routes.post('/register', (req, res)=>{
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.pass
    })

    User.createUser(newUser, function (err, user) {
        if (err) throw err;
        res.json(user)
    });

    
})




//passport.authenticate('local', { failureRedirect: '/login' }),
routes.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) =>{
    res.json(req.body)
  });

module.exports = routes;