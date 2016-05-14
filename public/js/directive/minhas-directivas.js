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
       .directive('botaoAcao', function(){
         var ddo = {}
         ddo.restrict = "AE"
         ddo.scope = {
           button: "@",
           link: "@",
           nome: "@",
           href: "@",
           id: "@",
           classe: "@",
           acao: "&"
         }
         ddo.templateUrl = 'js/directive/meu-botao.html'
         //ddo.template = '<button name="btn-remove" id="btn-remove" ng-click="remover(foto)" class="btn btn-foto pull-left btn-remove btn-danger btn-block"><i class="fa fa-1x fa-trash"></i></button>'
         ddo.transclude = true;
         return ddo;
       });
