/**
 * Created by AndreyLukoprov on 1/8/2015.
 */
booksApp.controller('modalController',['$scope','$http','data',function($scope, $http, data) {
    $scope.modalShown = false;
    $scope.openModal = function(id) {
        $scope.modalShown = !$scope.modalShown;
        data.GetBooksById(id,function(result){
            $scope.bookDetail = result[0];
        });
    };
}]);
