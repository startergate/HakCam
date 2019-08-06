var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:class', function(req, res, next) {
    res.render('class', {class: req.params.class});

});

module.exports = router;
