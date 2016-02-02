var express = require('express');
var router = express.Router();

var auth=function(req,res,next){
	console.log(req.session);
	var session=req.session;
	console.log(session.views);
	if(session&&session.admin){
		return next();
	}else{
		return res.status(403).send('Forbidden')
	}
}
/* GET users listing. */
router.get('/',auth, function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/')

module.exports = router;
