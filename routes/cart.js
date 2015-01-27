/**
 * Created by AndreyLukoprov on 1/22/2015.
 */
var express = require('express');
var router = express.Router();
var booksController = require('../controllers/bookController');
var orderController = require('../controllers/orderController');
var cart = require('../models/cart');

router.post('/AddToCart', function (req, res) {
    if (req.session.cart == undefined) {
        req.session.cart = new cart();
    }
    if (req.session.cart.addToCart == undefined) {
        var buff = new cart();
        req.session.cart.addToCart = buff.addToCart;
    }
    req.session.cart.addToCart(req.body.id);
    res.send(undefined);
});

router.get('/GetFromCart', function (req, res) {
    if (req.session.cart != undefined) {
        booksController.getFromCart(req.session.cart, function (error, result) {
            res.send(result);
        });
    }
    else {
        res.json(null);
    }
});

router.post('/RemoveFromCart', function (req, res) {
    if (req.session.cart.removeFromCart == undefined) {
        var buff = new cart();
        req.session.cart.removeFromCart = buff.removeFromCart;
    }
    req.session.cart.removeFromCart(req.body.id);
    res.send(undefined);
});

router.get('/GetAmount', function (req, res) {
    var booksCount = 0;
    console.log(req.session.cart);
    if(req.session.cart!=undefined) {
        for (var i = 0; i < req.session.cart.books.length; i++) {
            booksCount =booksCount + req.session.cart.books[i].amount;
        }
    }
    res.json(booksCount);
});

router.post('/PlaceAnOrder', function (req, res) {
    orderController.addNewOrder(req.body.customer, req.session.cart.books, function (error, result) {
        if (!error) {
            res.send(undefined);
        }
    });
});



module.exports = router;