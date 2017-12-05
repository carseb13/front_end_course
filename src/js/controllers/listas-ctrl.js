app.controller('ListasCtrl',['$scope','$routeParams', 'ListaSrv',function($scope,$routeParams,ListaSrv){
   
    $scope.listas=[];

    
    ListaSrv.listar($routeParams).then(function successCallback(response){
        $scope.listas=response.data;
    },function errorCallback(response){
        console.log(response);
    });

}]);