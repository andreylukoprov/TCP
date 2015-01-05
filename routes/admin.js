/**
 * Created by AndreyLukoprov on 1/5/2015.
 */
var express = require('express');
var router = express.Router();
var booksController = require('../Infrastructure/Controllers/BookController');


router.get('/', function (req, res) {
    res.render('admin');
});


module.exports = router;