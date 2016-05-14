angular.module("minhasDirectivas", [])
       .directive('meuPainel', function() {
            var ddo = {}
            ddo.restrict = "AE"
            ddo.scope = {
              titulo : "@titulo"
            }
            ddo.templateUrl = "js/directive/meu-painel.html"
            ddo.transclude = true
            return ddo;
       })
       .directive('minhaFoto', function() {
          var ddo = {}
          ddo.restrict = "AE"
          ddo.scope = {
              url : "@",
              titulo : "@"
          }
          ddo.templateUrl = "js/directive/minha-foto.html"
          //ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}"';
          return ddo;
       })
