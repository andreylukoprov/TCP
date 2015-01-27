booksApp.controller('placeAnOrderModalController', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
    
        $scope.placeAnOrder = function (customer) {
            $modalInstance.close(customer);
        };
        
        $scope.cancel = function () {
            $modalInstance.dismiss();
        };

    }]);