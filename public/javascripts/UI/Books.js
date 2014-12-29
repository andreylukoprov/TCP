/**
 * Created by AndreyLukoprov on 12/26/2014.
 */
angular.module('booksApp', [])
    .factory('data', function ($http) {
        return {
            GetBooks: function (callback) {
                $http.get('/GetData').success(callback);
            },
            GetCategory: function (callback) {
                $http.get('/GetCategories').success(callback);
            },
            GetBooksByCategory:function(category,callback){
                $http.get('/GetBooksByCategory/'+category).success(callback);
            }
        }
    }).

    controller('booksController', function ($scope, $http, data) {
        $scope.SetCategory = function SetCategory(category){
            data.GetBooksByCategory(category,function(result){
                $scope.books = result;
            })
        };
    }).

    controller('categoryController', function ($scope, $http, data) {
        data.GetCategory(function (result) {
            $scope.categories =result;
        });
    });
