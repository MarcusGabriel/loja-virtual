(function() {
    'use strict';
  
    angular
      .module('virtual')
      .controller('ProdutoController', ProdutoController);
  
    /** @ngInject */
    function ProdutoController($scope, $http, $routeParams, toastr, $timeout, $location) {
        if($routeParams.produtoId){
            $http.get('http://localhost:8080/produto/'+ $routeParams.produtoId)
            .success(function(produto){
                $scope.produto = produto[0];
            })
            .error(function(){
                toastr.error("Produto não encontrado");
                $timeout(function() {
                    $location.path('/');
                }, 1500);
            });
        }

        $scope.produto = {};

        $scope.filterValue = function($event){
            if(isNaN(String.fromCharCode($event.keyCode))){
                $event.preventDefault();
            }
        };
        $scope.submeter = (function (){
            if($scope.produto._id){
                $http.put('http://localhost:8080/produto/'+$scope.produto._id, $scope.produto)
                .success( function(){
                    toastr.success("Produto atualizado com sucesso!");
                    $timeout(function() {
                        $location.path('/');
                    }, 1500);
                })
                .error(function(){
                    toastr.error("Ocorreu um erro! Tente novamente.", "Error");
                    $timeout(function() {
                        $location.path('/');
                    }, 1500);
                })
            }else{ 
                if($scope.formulario.$valid){
                    $http.post('http://localhost:8080/produto/',$scope.produto)
                    .success( function() {
                        $scope.produto = {};
                        toastr.success("Produto cadastrado com sucesso!");
                        $timeout(function() {
                            $location.path('/');
                        }, 1500);
                    })
                    .error(function (error)  {
                        toastr.error("Ocorreu um erro! Tente novamente.", "Error");
                        $timeout(function() {
                            $location.path('/');
                        }, 1500);
                    });
                }
            }
        });
        
        $scope.fotoAleatoria = function (produto) {
            var nome = produto.nome;
            $http.get('https://api.gettyimages.com/v3/search/images?phrase='+nome, {
                headers: {'Api-Key': 'bpaup4cjrzzddx6zgkmjhbc9'}
            })
            .success(function(retorno){
                $scope.produto.imagem = retorno.images[0].display_sizes[0].uri;
            })
            .error(function(error){
                console.log(error);  
            });
        }
    }
  })();
  