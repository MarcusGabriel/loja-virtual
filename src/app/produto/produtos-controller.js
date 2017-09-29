(function() {
    'use strict';
  
    angular
      .module('virtual')
      .controller('ProdutosController', ProdutosController);
  
    /** @ngInject */
    function ProdutosController($scope, $http, toastr) {
        
        $scope.produtos = [];
        $scope.mensagem = '';
        $scope.filtro = '';
        
        $http.get('http://localhost:8080/produto')
        .success(function(produto){
            $scope.produtos = produto;
        })
        .error(function(erro){
            toastr.error('Nenhum produto encontrado');
        });

        $scope.remover = (function(produto){
            $http.delete('http://localhost:8080/produto/'+produto._id)
            .success(function(){
                let indice = $scope.produtos.indexOf(produto);
                $scope.produtos.splice(indice,1);
                toastr.success('produto ' + produto.nome + ' removido com sucesso');
            })
            .error(function(){
                toastr.error('nao foi possivel remover a produto');
            })
        });
      
    }
  })();
  