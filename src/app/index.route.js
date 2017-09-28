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
        controllerAs : 'produtos'
      })
      .when('/produto/editar/:produtoId',{
        templateUrl : 'app/produto/produto.html',
        controller : 'ProdutoController',
        controllerAs: 'produto'
      })
      .when('/produto/novo',{
        templateUrl : 'app/produto/produto.html',
        controller : 'ProdutoController',
        controllerAs: 'produto'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
