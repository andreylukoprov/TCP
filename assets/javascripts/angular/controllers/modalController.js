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
            modalInstance.result.then(function (editedBook) {
                $scope.checkCategory(editedBook);
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
        
        $scope.openCart = function () {
            if ($scope.$parent.booksAmount == 0) {
                alert("Your cart is empty");
            } else {
                booksFactory.getFromCart(function (books) {
                    var modalInstance = $modal.open({
                        templateUrl: '/modal/CartInfo',
                        controller: 'cartModalController',
                        size: 'lg',
                        resolve: {
                            books: function () {
                                return books;
                            }
                        }
                    });
                    modalInstance.result.then(function (deleted) {
                        $scope.$parent.booksAmount -= deleted;
                    }, function () {
                        booksFactory.getAmount(function (result) {
                            $scope.$parent.booksAmount = result;
                        });
                    });
                });
            }
        };
        
        
        $scope.openPlaceAnOrder = function () {
            var modalInstance = $modal.open({
                templateUrl: '/modal/PlaceAnOrder',
                controller: 'placeAnOrderModalController',
                size: 'lg'
            });
            modalInstance.result.then(function (customer) {
                booksFactory.placeAnOrder(customer, function (result) {
                    alert('Your order is accepted. In the near future you will contact our operator.');
                });           
            });
        };

        $scope.openOrderInfo = function (order) {
            var modalInstance = $modal.open({
                templateUrl: '/modal/OrderInfo',
                controller: 'orderInfoModalController',
                size: 'lg',
                resolve: {
                    order: function () {
                        return order;
                    }
                }
            });
        };


    }]);