var express = require('express');
var router = express.Router();

var auth=function(req,res,next){
	if(req.session.auth&&req.session.auth=='true'){
		return next();
		
	}else{
		res.redirect('/');
	}
}
/* GET users listing. */
router.get('/',auth, function(req, res, next) {

  res.send('respond with a resource');
});

module.exports = router;
