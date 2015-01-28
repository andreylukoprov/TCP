booksApp.controller('pageController', ['$scope','booksFactory', function ($scope, booksFactory) {
        $scope.curPage = 0;
        $scope.pageSize = 5;
        
        $scope.showData = function () {
            booksFactory.GetBooksByCategory("All", function (result) {
                $scope.datalists = result;
            });
        };
        
        $scope.numberOfPages = function () {
            return Math.ceil($scope.datalists.length / $scope.pageSize);
        };


    }]);
