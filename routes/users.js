var express = require('express');
var router = express.Router();
const testController = require('../controller/TestController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', testController.test)

module.exports = router;
