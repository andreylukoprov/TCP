/**
 * Created by AndreyLukoprov on 1/16/2015.
 */

var service = require('../services/main-service');

var deferred = require('deferred');

var AuthorController =
{
   removeAuthor:function(id,callback){
      service.removeAuthor(id,callback);
   },
    addUpdateAuthor:function(author,callback){
        if(author._id===undefined){
            service.addAuthor(author,callback);
        }else{
            service.updateAuthor(author,callback);
        }
    }
}

module.exports = AuthorController;