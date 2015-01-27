var service = require('../services/main-service');

var deferred = require('deferred');

var OrderController =
 {
    addNewOrder: function (customer, books, callback){
        service.addNewOrder(customer, books, callback);
    },
    getAllOrders: function (callback){
        service.getAllOrders(callback);
    }
}

module.exports = OrderController;