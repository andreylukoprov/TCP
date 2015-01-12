/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
booksApp.controller('modalController',['$scope', '$modal', '$log', 'booksFactory', function ($scope, $modal, $log,booksFactory) {

    $scope.book;

    $scope.open = function (id) {
        var modalInstance = $modal.open({
            templateUrl: '/modal/ViewInfo',
            controller: 'modalInstanceController',
            size: 'lg',
            resolve: {
                book: function () {
                    booksFactory.GetBooksById(id,function(result){
                        $scope.book = result[0];
                    });
                    return $scope.book;

                }
            }
        });

        modalInstance.result.then(function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
}]);