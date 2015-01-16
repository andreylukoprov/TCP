/**
 * Created by AndreyLukoprov on 1/8/2015.
 */
booksApp.controller('booksController',['$scope','$http','booksFactory', function ($scope, $http, booksFactory) {
    booksFactory.GetBooksByCategory("All", function (result) {
        $scope.books = result;
    });

    booksFactory.getAllAuthors( function (result) {
        $scope.authors = result;
    });

    $scope.SetCategory = function (category) {
        booksFactory.GetBooksByCategory(category, function (result) {
            $scope.books = result;
        });
    };

    $scope.RemoveBook = function(book){
        booksFactory.RemoveBook(book._id,function(result){
           if(result!=="") {
               $scope.books.splice($scope.books.indexOf(book), 1);
           }
        })
    };

    $scope.RemoveAuthor = function(author){
        booksFactory.RemoveBook(author._id,function(result){
            if(result!=="") {
                $scope.authors.splice($scope.authors.indexOf(author), 1);
            }
        })
    };

}]);