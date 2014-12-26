/**
 * Created by User on 12/23/2014.
 */
var express = require('express');
var mongoose = require("mongoose");

var bookSchema = mongoose.Schema(
    {
        Title:String,
        Price: Number,
        Description:String,
        DateOfPublication: Date,
        PublishingHouse:String
    },
    {
        collection:'Books'
    }
);

var books = mongoose.model('books',bookSchema);

module.exports = books;