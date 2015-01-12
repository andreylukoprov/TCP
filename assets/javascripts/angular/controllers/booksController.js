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

    $scope.RemoveBook = function(book){
        data.RemoveBook(book._id,function(result){
           if(result!=="") {
               $scope.books.splice($scope.books.indexOf(book), 1);
           }
        })
    };

    $scope.AddNewBook= function(book){
        data.AddNewBook(book,function(result){
            $scope.books = result;
        });
    };
}]);