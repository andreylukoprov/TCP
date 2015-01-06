/**
 * Created by User on 12/23/2014.
 */
var express = require('express');
var mongoose = require("mongoose");
var books = require('../Models/BookModel');

var dbuser = 'sa';
var dbpassword = '1';

mongoose.connect('mongodb://' + dbuser + ':' + dbpassword + '@ds029950.mongolab.com:29950/traningdb');

var BookRepository =
{
    GetAllBooks: function (callback) {
        books.find({},
            function (error, result) {
                callback(error, result);
            });
    },
    GetCategory: function (callback) {
        books.distinct('Category', function (error, result) {
            callback(error, result);
        });
    },
    GetBooksByCategory: function (category, callback) {
        books.find({Category: category},
            function (error, result) {
                callback(error, result);
            })
    },
    GetBookById: function (id, callback) {
        books.find({
                _id: id
            },
            function (error, result) {
                callback(error, result);
            })
    },
    RemoveBook: function (id, callback) {
        books.remove({
                _id: id
            },
            function (error, result) {
                callback(error, result);
            })
    },
    AddBook: function (book, callback) {
        var newBook = new books({
            Title: book.Title,
            Price: book.Price,
            Description: book.Description,
            DateOfPublication: book.DateOfPublication,
            PublishingHouse: book.PublishingHouse,
            Category: book.Category
        });
        newBook.save();
        callback(undefined, undefined);
    }
}

module.exports = BookRepository;