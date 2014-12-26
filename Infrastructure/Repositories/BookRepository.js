/**
 * Created by User on 12/23/2014.
 */
var express = require('express');
var mongoose = require("mongoose");
var books = require('../Models/BookModel');

var dbuser = 'sa';
var dbpassword = '1';

mongoose.connect('mongodb://'+dbuser+':'+dbpassword+'@ds029950.mongolab.com:29950/traningdb');

var BookRepository =
{
    GET:function(callback){
        books.find({},
            function(error,result)
        {
            callback(error,result);
        })
    }
}

module.exports = BookRepository;