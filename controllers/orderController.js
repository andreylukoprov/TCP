var service = require('../services/main-service');

var OrderModel = require('../models/OrderModel');

var deferred = require('deferred');

var OrderController =
 {
    addNewOrder: function (customer, books, callback){
        service.addNewOrder(customer, books, callback);
    },
    getAllOrders: function (callback){
        service.getAllOrders(function (error, orders) {
            if (!error) {
                deferred.map(orders, function (order) {
                    var d = deferred();
                    service.getBooksByIds(order.books, function (error, books) {
                        if (!error) {
                            d.resolve(new OrderModel(order, books));
                        }
                    });
                    return d.promise;
                })(function (result) {
                    callback(error, result);
                });
            }        
        });
    }
}

module.exports = OrderController;