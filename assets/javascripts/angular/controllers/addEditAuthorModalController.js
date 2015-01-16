/**
 * Created by AndreyLukoprov on 1/16/2015.
 */
booksApp.controller('addEditAuthorModalController', ['$scope', '$modalInstance', 'booksFactory', 'author', function ($scope, $modalInstance, booksFactory, author) {

    $scope.author = author;

    $scope.saveAuthor = function (author) {
        var newAuthor = {
            _id: author._id,
            firstName: author.firstName,
            lastName: author.lastName
        };
        console.log(newAuthor);
        booksFactory.addNewAuthor(newAuthor, function (result) {
            $modalInstance.close(newAuthor);
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
