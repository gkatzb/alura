angular.module("alurapic")
       .controller("FotosController", function($scope, api) {

         api.query(function(fotos){
           $scope.fotos = fotos;
         }, function(erro){
           console.log("Falha ao recuperar imagem");
         })

        $scope.remover = function(foto){
          api.delete({fotoId: foto._id}, function(){
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = "Foto " + foto.titulo + " removida com sucesso!";
          }, function(erro){
            $scope.mensagem = "Nao foi possivel remover a foto " + foto.titulo;
          })
        };

       })
