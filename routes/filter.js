/**
 * Created by emmanuel.manyike on 16/01/05.
 */
var express = require('express');
var router = express.Router();
var apiData = require('../model/getdata');

/* GET users listing. */
router.get('*/posts/filter*', function(req, res, next) {
    var userId = req.query.userid;
        userId = parseInt(userId, 10);
    var apiDataObj = new apiData();
    apiDataObj.getPostsByUserId(userId, function(response){
        res.render('posts', { title: 'Junk Data',posts: response, userId:userId });
    });
});

module.exports = router;
