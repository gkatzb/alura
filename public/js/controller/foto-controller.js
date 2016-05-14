angular.module('alurapic').controller('FotoController', function($scope, $routeParams, $location, $timeout, api){

  if($routeParams.fotoId){
    api.get({fotoId: $routeParams.fotoId}, function(foto){
      $scope.foto = foto;
    }, function(erro){
      console.log(erro);
      $scope.mensagem = 'Nao foi possivel obter a foto';
    });
  }

  $scope.submeter = function(){
    if($scope.formulario.$valid){
      if($routeParams.fotoId){
        api.update({fotoId: $scope.foto._id}, $scope.foto, function(){
          $scope.mensagem = 'Foto alterada com sucesso!';
          $timeout(function () {
            $location.path('/');
          }, 2000);
        }, function(erro){
          $scope.mensagem = 'Nao foi possivel alterar a foto';
        })
      } else {
        api.save($scope.foto, function(){
          $scope.mensagem = 'Foto cadastrada com sucesso';
          $timeout(function () {
            $location.path('/');
          }, 2000);
        }, function(erro){
          console.log(erro);
          $scope.mensagem = 'Nao foi possivel cadastrar a foto';
        });
      }
    }
  }
})
