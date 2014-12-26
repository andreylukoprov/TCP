/**
 * Created by User on 12/23/2014.
 */
var express = require('express');
var mongoose = require("mongoose");
var bookRepository = require('../Repositories/BookRepository');

var BookController =
{
    GetBooks:function(callback) {
    bookRepository.GET(function(error,result)
    {
        callback(error,result);
    });
    }
}

module.exports = BookController;