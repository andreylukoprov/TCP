/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
var bookRepository = require('../core/repositories/bookRepository');
var authorRepository = require('../core/repositories/authorRepository');
var orderRepository = require('../core/repositories/orderRepository');
var BookModel = require('../models/bookModel');
var CartModel = require('../models/cartModel');


var deferred = require('deferred');

var MainService = {
    getBooksByCategory: function (category, callback) {
        bookRepository.GetBooksByCategory(category, function (error, books) {
            if (!error) {
                deferred.map(books, function (book) {
                    var d = deferred();
                    authorRepository.getAuthorById(book.authorID, function (error, author) {
                        if (!error) {
                            d.resolve(new BookModel(book, author[0]));
                        }
                    });
                    return d.promise;
                })(function (result) {
                    callback(error, result);
                });
            }
        });
    },
    getBookById: function (id, callback) {
        bookRepository.GetBookById(id, function (error, books) {
            if (!error) {
                deferred.map(books, function (book) {
                    var d = deferred();
                    authorRepository.getAuthorById(book.authorID, function (error, author) {
                        if (!error) {
                            d.resolve(new BookModel(book, author[0]));
                        }
                    });
                    return d.promise;
                })(function (result) {
                    callback(error, result);
                });
            }
        });
    },
    getAllBooks: function (callback) {
        bookRepository.GetAllBooks(function (error, books) {
            if (!error) {
                deferred.map(books, function (book) {
                    var d = deferred();
                    authorRepository.getAuthorById(book.authorID, function (error, author) {
                        if (!error) {
                            d.resolve(new BookModel(book, author[0]));
                        }
                    });
                    return d.promise;
                })(function (result) {
                    callback(error, result);
                });
            }
        });
    },
    getAllAuthors: function (callback) {
        authorRepository.getAllAuthors(callback);
    },
    updateAuthor: function (author, callback) {
        authorRepository.updateAuthor(author, callback);
    },
    addAuthor: function (author, callback) {
        authorRepository.addAuthor(author, callback);
    },
    removeAuthor: function (id, callback) {
        authorRepository.removeAuthor(id, callback);
    },
    addNewOrder: function (customer, books, callback) {
        orderRepository.addNewOrder(customer, books, callback);
    },
    getAllOrders: function (callback) {
        orderRepository.getAllOrders(callback);
    },
    getBooksByIds: function (books, callback){
        deferred.map(books, function (book) {
            var d = deferred();
            var amount = book.amount;
            bookRepository.GetBookById(book.id, function (error, book) {
                if (!error) {
                    d.resolve(new CartModel(book[0], amount));
                }
            });
            return d.promise;
        })(function (result) {
            callback(undefined, result);
        });
    },
    updateOrderStatus: function (id, status, callback){
        orderRepository.updateStatus(id, status, callback);
    }

}/////

module.exports = MainService;