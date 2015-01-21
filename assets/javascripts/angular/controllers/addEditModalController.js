/**
 * Created by AndreyLukoprov on 1/14/2015.
 */
booksApp.controller('addEditModalController', ['$scope', '$modalInstance', 'booksFactory', 'book', 'authors', function ($scope, $modalInstance, booksFactory, book, authors) {

    $scope.book = book;
    $scope.authors = authors;

    if ($scope.book != null) {
        $scope.authordd = $scope.book.author;
    }

    $scope.save = function (book) {
        var newBook = {
            _id: book._id,
            title: book.title,
            price: book.price,
            description: book.description,
            dateOfPublication: book.dateOfPublication,
            publishingHouse: book.publishingHouse,
            category: book.category,
            author: $scope.authordd
        };

        booksFactory.AddNewBook(newBook, function () {
            $modalInstance.close(newBook);
        });
    };

    $scope.changeAuthor = function (author) {
        $scope.authordd = author;
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);

