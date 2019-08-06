var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:class', (req, res, next) => {
    res.render('class', {classes: req.params.class});

});

router.get('/:class/:lecture', (req, res, next) => {
    res.render('stream', {classes: req.params.class, lecture: req.params.lecture});
})

module.exports = router;
