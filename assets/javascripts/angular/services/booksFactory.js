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
        RemoveBook:function(id,callback){
            $http.post('/admin/RemoveBook',{id:id}).success(callback);
        },
        AddNewBook:function(book,callback){
            $http.post('/admin/AddNewBook',{book:book}).success(callback);
        }
    }
});