/**
 * Created by AndreyLukoprov on 1/14/2015.
 */
booksApp.controller('addEditModalController', ['$scope', '$modalInstance','booksFactory', 'book', 'authors', function ($scope, $modalInstance, booksFactory,book, authors) {

    $scope.book = book;
    $scope.authors = authors;
    if (book !== null) {
        var index = -1;
        for (var i = 0; i < authors.length; i++) {
            if (authors[i]._id === book.author._id) {
                index = i;
            }
        }
        if (index !== -1) {
            $scope.bookAuthor = $scope.authors[index];
        }
    }

    $scope.save = function (book, author) {
        var newBook ={
            _id:book._id,
            title: book.title,
            price: book.price,
            description: book.description,
            dateOfPublication: book.dateOfPublication,
            publishingHouse: book.publishingHouse,
            category: book.category,
            author:author
        };

        booksFactory.AddNewBook(newBook,function(result){
            $modalInstance.close(newBook);
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);

