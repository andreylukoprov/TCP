/**
 * Created by AndreyLukoprov on 1/8/2015.
 */
booksApp.controller('categoryController',['$scope','$http','data', function ($scope, $http, data) {
    data.GetCategory(function (result) {
        $scope.categories = result;
    });
}]);