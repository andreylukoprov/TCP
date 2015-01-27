var mongoose = require("mongoose");

var orderSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        phone: String,
        books: Array
    },
    {
        collection: 'Orders'
    }
);

var orders = mongoose.model('orders', orderSchema);


var OrderRepository = {
    addNewOrder: function (customer, books, callback) {
        var newOrder = orders(
            {
                firstName: customer.firstName,
                lastName: customer.lastName,
                phone: customer.phone,
                books: books
            }
        );
        newOrder.save(function (error, result) {
            callback(error, result);
        });
    },
    getAllOrders: function (callback) {
        orders.find({},
            function (error, result) {
            callback(error, result);
        });
    }
}

module.exports = OrderRepository;