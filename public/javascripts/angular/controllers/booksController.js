/**
 * Created by AndreyLukoprov on 1/8/2015.
 */
booksApp.controller('booksController',['$scope','$http','data', function ($scope, $http, data) {
    data.GetBooksByCategory("All", function (result) {
        $scope.books = result;
    });

    $scope.SetCategory = function (category) {
        data.GetBooksByCategory(category, function (result) {
            $scope.books = result;
        })
    };

    $scope.RemoveBook = function(id){
        data.RemoveBook(id,function(result){
            $scope.books = result;
        })
    };

    $scope.AddNewBook= function(book){
        data.AddNewBook(book,function(result){
            debugger;
            $scope.books = result;
        });
    };
}]);