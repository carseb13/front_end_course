app.service('TableroSrv',['$http',function($http){
    return {
        recurso:'/api/tableros',
        listar:function(parms){
            return $http.get(this.recurso,{
            params:parms});
        }
    };
}]);