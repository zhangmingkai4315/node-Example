var express = require('express');
var router = express.Router();

router.get('/twitter',auth, function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/')

module.exports = router;
