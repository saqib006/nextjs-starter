const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');


passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user.id);
	});
});



passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},

function (email, password, done) {
    User.getUserByeEmail(email, function (err, user) {
        if (err) throw err;
        if (!user) {
            return done(null, false, { message: 'Unknown User' });
        }

        User.comparePassword(password, user.password, function (err, isMatch) {
            if (err) throw err;
            if (isMatch) {
              
                return done(null, {
                    id:user._id,
                    name:user.name,
                    email:user.email
                   
                });
            } else {
                return done(null, false, { message: 'Invalid password' });
            }
        });
    });
}));
   
