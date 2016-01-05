var express = require('express');
var router = express.Router();
var apiData = require('../model/getdata');

/* GET users listing. */
router.get('*/posts/*', function(req, res, next) {
  var apiDataObj = new apiData();
  apiDataObj.getPosts(function(response){
    res.render('posts', { title: 'Junk Data',posts: response });
  });
});

module.exports = router;
