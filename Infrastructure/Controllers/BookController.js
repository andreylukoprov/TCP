/**
 * Created by User on 12/23/2014.
 */
var express = require('express');
var mongoose = require("mongoose");
var bookRepository = require('../Repositories/BookRepository');

var BookController =
{
    GetCategories:function(callback){
        bookRepository.GetCategory(function(error,result){
            callback(error,result);
        })
    },
    GetBooksByCategory:function(category,callback){
        if(category=="All")
        {
            bookRepository.GetAllBooks(function (error, result) {
                callback(error, result)
            })
        }
        else {
            bookRepository.GetBooksByCategory(category, function (error, result) {
                callback(error, result)
            })
        }
    }
}

module.exports = BookController;