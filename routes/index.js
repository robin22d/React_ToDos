var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/createToDo', function(req, res) {
    res.render('createToDos', null);
});

module.exports = router;
