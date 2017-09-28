(function() {
    'use strict';
  
    angular
      .module('virtual')
      .controller('ProdutoController', ProdutoController);
  
    /** @ngInject */
    function ProdutoController($scope, $http, $routeParams, toastr, $timeout, $location) {
        var vm = this;
        var url = 'http://localhost:8080/produto/';
        if($routeParams.produtoId){
            
            $http.get(url+ $routeParams.produtoId)
            .success(function(produto){
                $scope.produto = produto[0];
            })
            .error(function(){
                console.log('produto não encontrada');
                $scope.mensagem = 'id não encontrado';
            });
        }
        $scope.filterValue = function($event){
            if(isNaN(String.fromCharCode($event.keyCode))){
                $event.preventDefault();
            }
        };
        $scope.produto = {};
        $scope.mensagem = '';

        
        $scope.submeter = (function (){
            if($scope.produto._id){
                $http.put(url+$scope.produto._id, $scope.produto)
                .success( function(){
                    toastr.success("Produto atualizado com sucesso!");
                    $timeout(function() {
                        $location.path('/produto');
                    }, 1500);
                })
                .error(function(){
                    toastr.error("Ocorreu um erro! Tente novamente.", "Error");
                })
            }else{ 
                if($scope.formulario.$valid){
                    $http.post(url,$scope.produto)
                    .success( function() {
                        // $scope.produto = {};
                        toastr.success("Produto cadastrado com sucesso!");
                        $timeout(function() {
                            $location.path('/produto');
                        }, 1500);
                        
                    })
                    .error(function (error)  {
                        $scope.mensagem = 'produto não cadastrada com sucesso';
                        console.log(error);
                    });
                }
            }
        });
      
    }
  })();
  