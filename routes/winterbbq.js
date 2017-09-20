/**
 * Created by filip on 16/09/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('winterbbq');
});

module.exports = router;
