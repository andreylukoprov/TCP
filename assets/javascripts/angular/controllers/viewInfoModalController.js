/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
booksApp.controller('viewInfoModalController',['$scope', '$modalInstance','book',function ($scope, $modalInstance,book) {

    $scope.book = book;

    $scope.ok = function () {
    };

    $scope.cancel = function () {
        $modalInstance.close('cancel');
    };
}]);