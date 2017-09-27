(function() {
    'use strict';
  
    angular
      .module('virtual')
      .controller('ProdutoController', ProdutoController);
  
    /** @ngInject */
    function ProdutoController($scope, $http, $routeParams, toastr) {
        if($routeParams.produtoId){
            $http.get('http://localhost:8080/produto/'+ $routeParams.produtoId)
            .success(function(produto){
                $scope.produto = produto[0];
            })
            .error(function(){
                console.log('produto não encontrada');
                $scope.mensagem = 'id não encontrado';
            });
        }

        $scope.produto = {};
        $scope.mensagem = '';

        
        $scope.submeter = (function (){
            if($scope.produto._id){
                $http.put('http://localhost:8080/produto/'+$scope.produto._id, $scope.produto)
                .success( function(){
                    toastr.success("Produto atualizado com sucesso!");
                })
                .error(function(){
                    toastr.error("Ocorreu um erro! Tente novamente.", "Error");
                })
            }else{ 
                if($scope.formulario.$valid){
                    $http.post('http://localhost:8080/produto/',$scope.produto)
                    .success( function(response) {
                        $scope.produto = {};
                        toastr.success("Produto cadastrado com sucesso!");
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
  