
app.config(['$routeProvider', function($routerProvider){
    $routerProvider
        .when('/login',{
            templateUrl:'./partials/login-partial.html',
            controller:'LoginCtrl'
        })
        .when('/tableros',{
            templateUrl:'./partials/tablero-partial.html',
            controller:'TableroCtrl'
        })
        .when('/tableros/:id/listas',{
            templateUrl:'./partials/listas-partial.html',
            controller:'ListasCtrl'
        })
        .otherwise({
        redirectTo:'/login'
    });
}]);
