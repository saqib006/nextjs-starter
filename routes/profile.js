const router = require('express').Router();




function isAuthenticate(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/');
	}
}

router.get('/profile',isAuthenticate, (req, res) => {
	console.log(req.user)
  })
module.exports = router