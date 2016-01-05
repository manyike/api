/**
 * Created by emmanuel.manyike on 16/01/05.
 */
var express = require('express');
var router  = express.Router();
var apiData = require('../model/getdata');

/* GET users listing. */
router.get('*/todo/*', function(req, res, next) {
    var apiDataObj = new apiData();
    apiDataObj.getTodos(function(response){
        var completed = 0,
            inProgress = 0;
        response.forEach(function(el, idx, array){
            if(el.completed){
                ++completed;
            } else {
                ++inProgress;
            }
        });
        res.render('todo', { title: 'Junk Data',todo: response, completed: completed, inProgress: inProgress });
    });
});

module.exports = router;

