var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session) res.render('index_loggedin.ejs', { title: 'Express' });
  else res.render('index.ejs');

});

module.exports = router;
