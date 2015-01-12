/**
 * Created by AndreyLukoprov on 1/8/2015.
 */
booksApp.controller('categoryController',['$scope','$http','booksFactory', function ($scope, $http, booksFactory) {
    $scope.activeCategory = '';

    booksFactory.GetCategory(function (result) {
        $scope.categories = result;
    });
}]);