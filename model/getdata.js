/**
 * Created by emmanuel.manyike on 16/01/05.
 */
var http = require('http');

var jsonPlaceHolder = function(){
    return {
        getPosts: function (callback) {
            var options = {
                protocol: 'http:',
                hostname: 'jsonplaceholder.typicode.com',
                path: '/posts',
                port: 80,
                method: 'GET'
            };
            var getRequest = http.get(options, function(res) {
                res.setEncoding('utf8');
                var jsonRes = '';
                res.on('data', function (chunk) {
                    jsonRes += chunk;
                });
                res.on('end', function(){
                    return callback(JSON.parse(jsonRes));
                });
            });
            getRequest.on('error', function () {
                return callback({error:'error occured.'});
            });
            getRequest.end();
        },
        getTodos: function (callback) {
            var options = {
                protocol: 'http:',
                hostname: 'jsonplaceholder.typicode.com',
                path: '/todos',
                port: 80,
                method: 'GET'
            };
            var getRequest = http.get(options, function(res) {
                res.setEncoding('utf8');
                var jsonRes = '';
                res.on('data', function (chunk) {
                    jsonRes += chunk;
                });
                res.on('end', function(){
                    return callback(JSON.parse(jsonRes));
                });
            });
            getRequest.on('error', function () {
                return callback({error:'error occured.'});
            });
            getRequest.end();
        },
        getPostsByUserId: function(id, callback){
            var options = {
                protocol: 'http:',
                hostname: 'jsonplaceholder.typicode.com',
                path: '/posts/?userId='+id,
                port: 80,
                method: 'GET'
            };
            var getRequest = http.get(options, function(res) {
                res.setEncoding('utf8');
                var jsonRes = '';
                res.on('data', function (chunk) {
                    jsonRes += chunk;
                });
                res.on('end', function(){
                    return callback(JSON.parse(jsonRes));
                });
            });
            getRequest.on('error', function () {
                return callback({error:'error occured.'});
            });
            getRequest.end();
        },
        getTasksByStatus: function(status, callback){
            var options = {
                protocol: 'http:',
                hostname: 'jsonplaceholder.typicode.com',
                path: '/todos/?completed='+status,
                port: 80,
                method: 'GET'
            };
            var getRequest = http.get(options, function(res) {
                res.setEncoding('utf8');
                var jsonRes = '';
                res.on('data', function (chunk) {
                    jsonRes += chunk;
                });
                res.on('end', function(){
                    return callback(JSON.parse(jsonRes));
                });
            });
            getRequest.on('error', function () {
                return callback({error:'error occured.'});
            });
            getRequest.end();
        }

    }
};
module.exports = jsonPlaceHolder;
