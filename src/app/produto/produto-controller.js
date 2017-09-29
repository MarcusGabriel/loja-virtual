(function() {
    'use strict';
  
    angular
      .module('virtual')
      .controller('ProdutoController', ProdutoController);
  
    /** @ngInject */
    function ProdutoController($scope, $http, $routeParams, toastr, $timeout, $location) {
        var vm = this;
        var url = 'http://localhost:8080/produto/';
        vm.produto = {};
        console.log(vm.produtosImagem);
        vm.init = function(){
            vm.id = $routeParams.produtoId;
            if(!!vm.id){
                console.log(vm.id);
                vm.buscarProduto(vm.id);
            }
            // vm.filterValue();
        }

        vm.buscarProduto = function (id){
            $http.get(url + id)
            .success(function(produto){
                vm.produto = produto[0];
            })
            .error(function(){
                toastr.error("Produto não encontrado");
                $timeout(function() {
                    $location.path('/');
                }, 1500);
            });
        }

        vm.filterValue = function($event){
            if(isNaN(String.fromCharCode($event.keyCode))){
                $event.preventDefault();
            }
        };
        vm.gerarImagem = function(){
            console.log('teste');
        }

        
        vm.submeter = (function (id = null){
            if(vm.id){
                $http.put(url+vm.id, vm.produto)
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
                if(vm.formulario.$valid){
                    $http.post(url,vm.produto)
                    .success( function() {
                        toastr.success("Produto cadastrado com sucesso!");
                        $timeout(function() {
                            $location.path('/produto');
                        }, 1500);
                        
                    })
                    .error(function (error)  {
                        toastr.error("Erro ao cadastrar!");
                    });
                }
            }
        });
        
        vm.fotoAleatoria = function (produto) {
            var nome = produto.produto.nome;
            $http.get('https://api.gettyimages.com/v3/search/images?phrase='+nome, {
                headers: {'Api-Key': 'bpaup4cjrzzddx6zgkmjhbc9'}
            })
            .success(function(retorno){
                vm.produto.imagem = retorno.images[0].display_sizes[0].uri;
            })
            .error(function(error){
                console.log(error);  
            });
        }
        
        vm.init();
    }
  })();
  