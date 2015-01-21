/**
 * Created by AndreyLukoprov on 1/20/2015.
 */
signinapp.controller('signinController',['$scope','$location','signinFactory',function($scope,$location,signinFactory){

   $scope.user={
       username:'',
       password:''
   }

    $scope.checkUser = function(){
        debugger;
      if($scope.user.username=='admin' && $scope.user.password=='1'){
     /*     signinFactory.checkUser($scope.user,function(result){
              console.log(result);
          });*/
          window.location = '/admin/admin'
      }
    };

}]);