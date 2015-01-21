/**
 * Created by AndreyLukoprov on 1/20/2015.
 */
signinapp.factory('signinFactory', function ($http) {
    return {
        checkUser:function(user,callback){
            $http.post('/admin/CheckUser',{user:user}).success(callback);
        }
    }
});

