/**
 * Created by AndreyLukoprov on 12/26/2014.
 */
angular.module('booksApp',[])
.factory('books',function($http){
        return{
         GetBooks:function(callback){
             $http.get('/GetData').success(callback);
         }
        }
    }).controller('booksController',function($scope,$http,books){
       // get();
       // function get() {
            books.GetBooks(function (results) {
                console.log(results);
                $scope.books = results;
            })
        //}
    });