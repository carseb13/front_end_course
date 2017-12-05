app.service('ListaSrv',['$http', function($http){
   return {
       recurso:'/api/listas',
       listar:function(parms){
        return $http.get(this.recurso,{params:parms});
       }
   } 
}]);