/**
 * Created by AndreyLukoprov on 1/23/2015.
 */
booksApp.controller('cartModalController', ['$scope', '$modalInstance', 'books', 'booksFactory', function ($scope, $modalInstance, books, booksFactory) {

        $scope.books = books;
        $scope.deleted = 0;

        $scope.removeBookFromCart = function (id) {
            $scope.deleted += 1;
            booksFactory.removeFromCart(id, function () { 
                for (var i = 0; i < $scope.books.length; i++) {
                    if ($scope.books[i].cartBook._id == id) {
                        $scope.books[i].amount -= 1;
                        if ($scope.books[i].amount == 0) {
                            $scope.books.splice(i, 1);
                        }
                    }
                }
            });
        };

        $scope.cancel = function () {
            $modalInstance.close($scope.deleted);
        };     

}]);
