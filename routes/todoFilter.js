/**
 * Created by emmanuel.manyike on 16/01/05.
 */
var express = require('express');
var router = express.Router();
var apiData = require('../model/getdata');

/* GET users listing. */
router.get('*/todo/filter*', function(req, res, next) {
    var status     = req.query.status;
    var completed  = status == '1';
    var apiDataObj = new apiData();
    apiDataObj.getTasksByStatus(completed, function(response){
        res.render('todo', { title: 'Junk Data',todo: response, status:completed });
    });
});

module.exports = router;
