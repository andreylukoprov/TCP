/**
 * Created by AndreyLukoprov on 1/5/2015.
 */
var express = require('express');
var router = express.Router();
var booksController = require('../controllers/bookController');
var authorsController = require('../controllers/authorController');
var ordersController = require('../controllers/orderController');
var service = require('../services/main-service');

router.get('/', function (req, res) {
    res.render('authorization');
});

router.get('/admin', function (req, res) {
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

router.get('/GetAllAuthors', function (req, res) {
    service.getAllAuthors(function (error, result) {
        if (!error) {
            res.send(result);
        }
    });
});

router.post('/RemoveAuthor', function (req, res) {
    authorsController.removeAuthor(req.body.id, function (error, result) {
        if (!error) {
            res.send(true);
        }
    });
});

router.post('/AddNewAuthor', function (req, res) {
    authorsController.addUpdateAuthor(req.body.author, function (error, result) {
        if (!error) {
            res.send(true);
        }
    });
});

router.get('/GetAllOrders', function (req, res) {
    ordersController.getAllOrders(function (error, result) {
        if (!error) {
            res.send(result);
        }    
    });
});

module.exports = router;