/**
 * Created by AndreyLukoprov on 1/5/2015.
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
            GetBooksByCategory: function (category, callback) {
                $http.get('/GetBooksByCategory/' + category).success(callback);
            },
            GetBooksById: function (id, callback) {
                $http.get('/GetBooksById/' + id).success(callback);
            },
            RemoveBook:function(id,callback){
                $http.post('/admin/RemoveBook',{id:id,category:GetCategory() }).success(callback);
            },
            AddNewBook:function(book,callback){
                $http.post('/admin/AddNewBook',{book:book,category:GetCategory()}).success(callback);
            }
        }
    }).

    controller('booksController', function ($scope, $http, data) {
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

    }).

    controller('categoryController', function ($scope, $http, data) {
        data.GetCategory(function (result) {
            $scope.categories = result;
        });
    }).

    directive('modalDialog', function() {
        return {
            restrict: 'E',
            scope: {
                show: '='
            },
            replace: true, // Replace with the template below
            transclude: true, // we want to insert custom content inside the directive
            link: function(scope, element, attrs) {
                scope.dialogStyle = {};
                scope.dialogStyle.width = 'auto';
                scope.dialogStyle.height = 'auto';
                scope.hideModal = function() {scope.show = false;
                };
            },
            template: "<div class='ng-modal' ng-show='show'>" +
            "<div class='ng-modal-overlay' ng-click='hideModal()'>" +
            "</div><div class='ng-modal-dialog' ng-style='dialogStyle'>" +
            "<div class='ng-modal-close' ng-click='hideModal()'>X</div>" +
            "<div class='ng-modal-dialog-content' ng-transclude>" +
            "</div>" +
            "</div>" +
            "</div>"
        };
    }).

    controller('modalController',function($scope, $http, data) {
        $scope.modalShown = false;
        $scope.openModal = function(id) {
            $scope.modalShown = !$scope.modalShown;
            data.GetBooksById(id,function(result){
                $scope.bookDetail = result[0];
            });
        };
    });
