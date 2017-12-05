app.controller('TableroCtrl',['$scope','TableroSrv', function($scope,tableroSrv){
            $scope.tableros={};     
            tableroSrv.listar()
              .then(function successCallback(response){
                    //todo lo disponible en $scope esta disponible en los partials
                           $scope.tableros= response.data;
                },function errorCallback(response){
                              console.log(response);
               });
}]);