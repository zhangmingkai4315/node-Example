var express = require('express');
var router = express.Router();
// var session=require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {
  var sess = req.session
  	console.log(req.session);
  if (sess.views) {
    sess.views++
    sess.admin=true
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    // sess.save(function(){
    	    res.end();
    // })

  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }
  // res.render('index', { title: 'Express' });
});
router.get('/logout',function(req,res,next){
	if(req.session){
		req.session.destroy();

	}
	res.redirect('/');
})

router.get('/login',function(req,res,next){
	res.render('login',{title:'Login'});
});


module.exports = router;
