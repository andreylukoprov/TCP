var express = require('express');
var router = express.Router();
var booksController = require('../Infrastructure/Controllers/BookController');


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/GetCategories', function (req, res) {
    booksController.GetCategories(function (error, result) {
        if (!error) {
            res.send(result);
        }
    });
});

router.get('/GetBooksByCategory/:category', function (req, res) {
    booksController.GetBooksByCategory(req.params.category, function (error, result) {
        if (!error) {
            res.send(result);
        }
    })
});

router.get('/GetBooksById/:id',function(req,res){
    console.log(req.params.id);
    booksController.GetBookById(req.params.id, function (error, result) {
        if (!error) {
         res.send(result);
        }
    })
});

module.exports = router;
