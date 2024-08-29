var express = require('express');
var router = express.Router();
const testController = require('../controllers/TestController.cjs');


/* GET users listing. */
router.get('/xyz', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/ve', testController.testVe);
router.get('/image', testController.testImageGen);
router.get('/text', testController.testTextGen);



module.exports = router;
