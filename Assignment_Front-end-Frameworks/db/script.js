var app = angular.module("myApp",[]);
app.controller("registration",function ($scope, $http){
$scope.postdata = function (even){

    var data={
        id: Math.random(),
        username: $scope.username,
        password: $scope.password,
        fullname: $scope.fullname,
        email: $scope.email,
        gender: $scope.gender,
        date: $scope.date,
      
        

    }
    $http.post("  http://localhost:3000/listStudent",data).then(function(res){

    alert("Đăng ký thành công");

    },function(error){
        alert("Đăng ký không thành công");
    }
    
    )

}

})
app.controller("LoginCtrl",function($scope){
    $scope.loginFro


})
app.controller("studentCtrl",function($scope, $http){
    $scope.list_subject =[];
    $http.get("/db/Students.json").then(function(res){
        $scope.list_subject = res.data;
    })
});