/**
 * Created by AndreyLukoprov on 1/5/2015.
 */
var express = require('express');
var router = express.Router();
var booksController = require('../Infrastructure/Controllers/BookController');

router.get('/', function (req, res) {
    res.render('admin');
});

router.post('/RemoveBook', function (req, res) {
    booksController.RemoveBook(req.body.id, function (error, result) {
        if (!error) {
            booksController.GetBooksByCategory(req.body.category, function (error, result) {
                if (!error) {
                    res.send(result);
                }
            });
        }
    })
});

router.post('/AddNewBook', function (req, res) {
    booksController.AddBook(req.body.book, function (error, result) {
        if (!error) {
            booksController.GetBooksByCategory(req.body.category, function (error, result) {
                if (!error) {
                    res.send(result);
                }
            });
        }
    });
});

module.exports = router;