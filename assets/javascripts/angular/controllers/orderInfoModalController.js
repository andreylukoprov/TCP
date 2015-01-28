booksApp.controller('orderInfoModalController', ['$scope', '$modalInstance', 'order', function ($scope, $modalInstance, order) {
        
        $scope.order = order;
               
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);