/**
 * Created by User on 12/23/2014.
 */
var mongoose = require("mongoose");

var bookSchema = mongoose.Schema(
    {
        title: String,
        price: Number,
        description: String,
        dateOfPublication: Date,
        publishingHouse: String,
        category: String,
        authorID: String
    },
    {
        collection: 'Books'
    }
);

var books = mongoose.model('books', bookSchema);


var BookRepository =
{
    GetAllBooks: function (callback) {
        books.find({},
            function (error, result) {
                callback(error, result);
            });
    },
    GetCategory: function (callback) {
        books.distinct('category', function (error, result) {
            callback(error, result);
        });
    },
    GetBooksByCategory: function (category, callback) {
        books.find({category: category},
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
            });
    },
    AddBook: function (book, callback) {
        var newBook = new books({
            title: book.title,
            price: book.price,
            description: book.description,
            dateOfPublication: book.dateOfPublication,
            publishingHouse: book.publishingHouse,
            category: book.category,
            authorID: book.author._id
        });
        newBook.save(function (error, result) {
            callback(error, result);
        });
    },
    updateBook: function (book, callback) {
        books.update({_id: book._id}, {
            $set: {
                title: book.title,
                price: book.price,
                description: book.description,
                dateOfPublication: book.dateOfPublication,
                publishingHouse: book.publishingHouse,
                category: book.category,
                authorID: book.author._id
            }
        }, function (error, result) {
            callback(error, result);
        });
    }
}

module.exports = BookRepository;