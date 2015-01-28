function OrderModel(order, books){
    this.customer = {
        id: order._id,
        firstName: order.firstName,
        lastName: order.lastName,
        phone: order.phone
    };
    this.orderNumber = order.orderNumber;
    this.status = order.status;
    this.books = books;
}

module.exports = OrderModel;