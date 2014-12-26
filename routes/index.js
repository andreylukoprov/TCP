var express = require('express');
var router = express.Router();
var booksController = require('../Infrastructure/Controllers/BookController');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/GetData', function(req, res) {
  booksController.GetBooks(function(error, result){
    if(!error)
    {
      res.send(result);
    }
  });
});


module.exports = router;
