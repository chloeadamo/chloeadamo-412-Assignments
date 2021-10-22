var express = require('express');
var router = express.Router();
const request = require('request');
let config = require('../config/config.js');

// let appId  = '6b36a5c1c622699f22be5e946bc5be9f';

/* POST request  */
router.post('/weather', function (req, res, next) {
  return new Promise((resolve, reject) => {
    request('https://api.openweathermap.org/data/2.5/weather?q='+req.body.city+"&"+"appid="+config.apiId, (err, response, body) => {
      if (response.statusCode === 200) {
          let info = JSON.parse(body);
          resolve(info);
      } else {
        reject(response);
      }
    });
  })
      .then((result) => {
          // resolve
          res.render('getRes', {temperature: result});
          // res.send(result)
          },
          //reject
          (result) => {
              res.render('index');
          }
      );
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('postRes');
});

module.exports = router;
