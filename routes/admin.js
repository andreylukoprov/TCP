/**
 * Created by AndreyLukoprov on 1/5/2015.
 */
var express = require('express');
var router = express.Router();
var booksController = require('../controllers/bookController');

router.get('/', function (req, res) {
    res.render('admin');
});

router.post('/RemoveBook', function (req, res) {
    booksController.RemoveBook(req.body.id, function (error, result) {
        if (!error) {
            res.send(true);
        }
    });
});

router.post('/AddNewBook', function (req, res) {
    booksController.AddBook(req.body.book, function (error, result) {
        if (!error) {
            res.send(false);
        }
    });
});

module.exports = router;