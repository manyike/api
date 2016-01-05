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
        var completed  = 0,
            inProgress = 0;
        response.forEach(function(el, idx, array){
            if(el.completed){
                ++completed;
            } else {
                ++inProgress;
            }
        });
        var total = completed + inProgress;
        res.render('todo', { title: 'Junk Data',todo: response, status:true, completed: completed, inProgress: inProgress,total: total });
    });
});

module.exports = router;
