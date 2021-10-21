var express = require('express');
var router = express.Router();

/* GET Request: a GET method that returns a fixed string */
router.get('/get', function(req, res, next) {
  res.render('getRes', {string: "Hey now!! "});
});

/* POST Request: a POST method that gets its parameter from the request body rather than the URL string */
router.post('/post', function(req, res, next) {
  res.render('postRes',  {response: req.body.name, len: req.body.name.length});
});

/* GET Request: a GET method that reads its input parameter as a named value on the URL */
router.get('/names/:fname', (function(req, res, next) {
  res.render('name', {name: req.params.fname});
}));

module.exports = router;
