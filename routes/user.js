const express = require('express');
const sid = require('@startergate/sidjs')
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/auth', (req, res, next) => {
  console.log(req.query);
  sid.loginAuth(req.cookies.sid_clientid, req.query.sessid).then(result => {
    req.session.sessid = result.sessid;
    req.session.pid = result.pid;
    req.session.nickname = result.nickname;
    req.session.expire = result.expire;

    res.redirect(`/`);
  }).catch(err => {
    console.log(err);
    res.redirect('/');
  });
})

module.exports = router;
