var mongoose = require("mongoose");

var orderSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        phone: String,
        books: Array,
        status: String,
        orderNumber: Number
    },
    {
        collection: 'Orders'
    }
);

var orders = mongoose.model('orders', orderSchema);


var OrderRepository = {
    addNewOrder: function (customer, books, callback) {
        var number = Math.floor((Math.random() * 100000) + 100000);
        var newOrder = orders(
            {
                firstName: customer.firstName,
                lastName: customer.lastName,
                phone: customer.phone,
                books: books,
                status: 'Pending',
                orderNumber: number
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
    },
    updateStatus: function (id, status, callback){
        orders.update({_id:id}, { $set: { status: status } },function(error,result) { callback(error, result);});
    }
}

module.exports = OrderRepository;