/**
 * Created by User on 12/23/2014.
 */
var bookRepository = require('../core/repositories/bookRepository');
var service = require('../services/main-service');

var deferred = require('deferred');

var BookController =
{
    GetCategories: function (callback) {
        bookRepository.GetCategory(function (error, result) {
            result.unshift("All");
            callback(error, result);
        });
    },
    GetBooksByCategory: function (category, callback) {
        bookRepository.GetCategory(function(error,result){
            if(result.indexOf(category)!==-1){
                service.getBooksByCategory(category,callback);
            }
            else{
                service.getAllBooks(callback);
            }
        });
    },
    GetBookById: function (id, callback) {
        service.getBookById(id,callback);
    },
    RemoveBook: function (id, callback) {
        bookRepository.RemoveBook(id,function (error, result) {
            callback(error, result);
        });
    },
    AddBook:function(book,callback){
        if(book._id===undefined) {
            bookRepository.AddBook(book,callback);
        }else{
            bookRepository.updateBook(book,callback);
        }
    }
}

module.exports = BookController;