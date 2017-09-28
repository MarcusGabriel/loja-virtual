(function() {
    'use strict';
  
    angular
      .module('virtual')
      .controller('ProdutosController', ProdutosController);
  
    /** @ngInject */
    function ProdutosController($scope, $http, toastr) {
        var vm = this;
        var url = 'http://localhost:8080/produto';
        vm.produtos = [];
        vm.mensagem = '';
        vm.filtro = '';
        vm.init = function(){
            vm.listar();
        }
        vm.listar = function(){
           $http.get(url)
            .success(function(produto){
                vm.produtos = produto;
            })
            .error(function(erro){
                toastr.error('Nenhum produto encontrado');
            });
        }
        $scope.remover = function(produto){
            $http.delete(url + '/'+produto._id)
            .success(function(){
                let indice = vm.produtos.indexOf(produto);
                vm.produtos.splice(indice,1);
                toastr.success('produto ' + produto.nome + ' removido com sucesso');
            })
            .error(function(){
                toastr.error('nao foi possivel remover a produto');
            })
        };
        vm.init();
    }
  })();
  