(function() {
    'use strict';
  
    angular
      .module('virtual')
      .controller('ProdutosController', ProdutosController);
  
    /** @ngInject */
    function ProdutosController($scope, $http) {
        
        $scope.produtos = [];
        $scope.mensagem = '';
        $scope.filtro = '';
        
        $http.get('http://localhost:8080/produto')
        .success(function(produto){
            $scope.produtos = produto;
        })
        .error(function(erro){
            $scope.mensagem = 'Nenhum produto encontrado';
        })
      
    }
  })();
  