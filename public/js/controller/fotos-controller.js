angular.module("alurapic")
       .controller("FotosController", function($scope, $http) {
            $http.get("/v1/fotos")
                 .then(function(res) {
                   console.log(res)
                    switch (res.status) {
                      case 200:
                        $scope.fotos = res.data ;
                        break;
                      default:
                        console.log("Falha ao recuperar imagem")
                        break;
                    }

                 })

        $scope.remover = function(foto){
          $http.delete("/v1/fotos/"+foto._id)
          .success(function(){
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = "Foto " + foto.titulo + " removida com sucesso!";
          })
          .error(function(erro){
            $scope.mensagem = "Nao foi possivel remover a foto " + foto.titulo;
          })
        };

       })
