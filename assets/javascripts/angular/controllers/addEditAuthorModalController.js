/**
 * Created by AndreyLukoprov on 1/16/2015.
 */
booksApp.controller('addEditAuthorModalController', ['$scope', '$modalInstance', 'booksFactory', 'authors', function ($scope, $modalInstance, booksFactory, authors) {

    $scope.authors = authors;

    $scope.save = function (author) {
        var newAuthor = {
            author: author
        };
        booksFactory.addNewAuthor(newAuthor, function (result) {
            $modalInstance.close(newAuthor);
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
