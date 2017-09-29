(function() {
  'use strict';

  angular
    .module('virtual')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
      templateUrl: 'app/produto/produtos.html',
      controller: 'ProdutosController',
    })
    .when('/produto/editar/:produtoId',{
      templateUrl : 'app/produto/produto.html',
      controller : 'ProdutoController',
    })
    .when('/produto/novo',{
      templateUrl : 'app/produto/produto.html',
      controller : 'ProdutoController',
    })
    .otherwise({
      redirectTo: '/'
    });
  }

})();
