angular.module("meusServicos", ["ngResource"])
  .factory("api", function($resource){
    return $resource("/v1/fotos/:fotoId", null, {
      'update': {
        method: 'PUT'
      }
    });
  })
