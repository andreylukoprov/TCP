/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/ViewInfo', function (req, res) {
    res.render('./modals/viewInfo');
});

router.get('/AddEdit', function (req, res) {
    res.render('./modals/addEdit');
});

router.get('/AddEditAuthor', function (req, res) {
    res.render('./modals/addEditAuthor');
});


module.exports = router;