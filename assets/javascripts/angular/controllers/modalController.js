/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
booksApp.controller('modalController', ['$scope', '$modal', 'booksFactory', function ($scope, $modal, booksFactory) {


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

    $scope.openEditAuthor = function (book) {
        var modalInstance = $modal.open({
            templateUrl: '/modal/AddEditAuthor',
            controller: 'addEditAuthorModalController',
            size: 'lg',
            resolve: {
                authors: function () {
                    return $scope.authors;
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
                authors: function () {
                    return $scope.authors;
                }
            }
        });
        modalInstance.result.then(function (book) {
            $scope.books.push(book);
        });
    };


}]);