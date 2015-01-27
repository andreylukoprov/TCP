function OrderModel(order, books){
    this.customer = {
        firstName: order.firstName,
        lastName: order.lastName,
        phone: order.phone
    };
    this.books = books;
}

module.exports = OrderModel;