app.controller('TableroCtrl',['$scope','TableroSrv', function($scope,tableroSrv){
             tableroSrv.listar()
              .then(function successCallback(response){
                              console.log(response);
                },function errorCallback(response){
                              console.log(response);
               });
}]);