/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/ViewInfo', function (req, res) {
    res.render('./modals/viewInfo');
});

module.exports = router;