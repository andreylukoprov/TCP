/**
 * Created by AndreyLukoprov on 1/8/2015.
 */
booksApp.factory('booksFactory', function ($http) {
    return {
        GetBooks: function (callback) {
            $http.get('/GetData').success(callback);
        },
        GetCategory: function (callback) {
            $http.get('/GetCategories').success(callback);
        },
        GetBooksByCategory: function (category, callback) {
            $http.get('/GetBooksByCategory/' + category).success(callback);
        },
        GetBooksById: function (id, callback) {
            $http.get('/GetBooksById/' + id).success(callback);
        },
        RemoveBook: function (id, callback) {
            $http.post('/admin/RemoveBook', { id: id }).success(callback);
        },
        AddNewBook: function (book, callback) {
            $http.post('/admin/AddNewBook', { book: book }).success(callback);
        },
        getAllAuthors: function (callback) {
            $http.get('/admin/GetAllAuthors').success(callback);
        },
        addNewAuthor: function (author, callback) {
            $http.post('/admin/AddNewAuthor', { author: author }).success(callback);
        },
        removeAuthor: function (id, callback) {
            $http.post('/admin/RemoveAuthor', { id: id }).success(callback);
        },
        addToCart: function (id, callback) {
            $http.post('/cart/AddToCart', { id: id }).success(callback);
        },
        getFromCart: function (callback) {
            $http.get('/cart/GetFromCart').success(callback);
        },
        getAmount: function (callback) {
            $http.get('/cart/GetAmount').success(callback);
        },
        removeFromCart: function (id, callback) {
            $http.post('/cart/RemoveFromCart', { id: id }).success(callback);
        },
        placeAnOrder: function (customer, callback) {
            $http.post('/cart/PlaceAnOrder', { customer: customer }).success(callback);
        },
        getAllOrders: function (callback) {
            $http.get('/admin/GetAllOrders').success(callback);
        },
        updateOrderStatus: function (id, status, callback) {
            $http.post('/admin/UpdateOrderStatus', { id: id, status: status }).success(callback);
        }
    }
});

