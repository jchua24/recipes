var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Recipe App Backend!');
});

router.use('/recipes', require('./recipes'));

module.exports = router;