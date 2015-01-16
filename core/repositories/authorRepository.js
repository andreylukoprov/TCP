/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
var mongoose = require("mongoose");

var authorsSchema = mongoose.Schema(
    {
        lastName:String,
        firstName:String
    },
    {
        collection:'Authors'
    }
);

var authors = mongoose.model('authors',authorsSchema);



var AuthorsRepository =
{
    getAuthorById: function (id, callback) {
        authors.find({
                _id: id
            },
            function (error, result) {
                callback(error, result);
            });
    },
    getAllAuthors:function(callback){
        authors.find({},function(error, result){
            callback(error,result);
        });
    },
    updateAuthor:function(author,callback){
        authors.update({_id:author._id},{$set:{
            firstName:author.firstName,
            lastName:author.lastName
        }},function(error,result){
            callback(error,result);
        });
    },
    addAuthor:function(author,callbacak){
        var newAuthor = authors({
            firstName:author.firstName,
            lastName:author.lastName
        });
        newAuthor.save(function(error,result){
            callbacak(error,result);
        });
    },
    removeAuthor:function(id,callback){
        authors.remove({
                _id: id
            },
            function (error, result) {
                callback(error, result);
            });
    }
}

module.exports = AuthorsRepository;