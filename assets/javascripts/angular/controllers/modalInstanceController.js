/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
booksApp.controller('modalInstanceController',['$scope', '$modalInstance','book',function ($scope, $modalInstance,book) {

    $scope.book = book;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);