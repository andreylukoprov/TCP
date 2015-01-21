/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
booksApp.controller('modalController', ['$scope', '$modal', function ($scope, $modal) {


    $scope.openViewInfo = function (book) {
        var modalInstance = $modal.open({
            templateUrl: '/modal/ViewInfo',
            controller: 'viewInfoModalController',
            size: 'lg',
            resolve: {
                book: function () {
                    return book;
                }
            }
        });
    };

    $scope.openEdit = function (book) {
        var modalInstance = $modal.open({
            templateUrl: '/modal/AddEdit',
            controller: 'addEditModalController',
            size: 'lg',
            resolve: {
                book: function () {
                    return book;
                },
                authors: function () {
                    return $scope.authors;
                }
            }
        });
        modalInstance.result.then(function(editedBook){
            $scope.books[$scope.books.indexOf(book)] = editedBook;
        });

    };

    $scope.openAdd = function () {
        var modalInstance = $modal.open({
            templateUrl: '/modal/AddEdit',
            controller: 'addEditModalController',
            size: 'lg',
            resolve: {
                book: function () {
                    return null;
                },
                authors: function () {
                    return $scope.authors;
                }
            }
        });
        modalInstance.result.then(function (book) {
            $scope.books.push(book);
        });
    };

    $scope.openEditAuthor = function (author) {
        var modalInstance = $modal.open({
            templateUrl: '/modal/AddEditAuthor',
            controller: 'addEditAuthorModalController',
            size: 'lg',
            resolve: {
                author: function () {
                    return author;
                }
            }
        });

    };

    $scope.openAddAuthor = function () {
        var modalInstance = $modal.open({
            templateUrl: '/modal/AddEditAuthor',
            controller: 'addEditAuthorModalController',
            size: 'lg',
            resolve: {
                author: function () {
                    return null;
                }
            }
        });
        modalInstance.result.then(function (book) {
            $scope.authors.push(book);
        });
    };


}]);