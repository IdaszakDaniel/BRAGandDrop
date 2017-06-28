(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller("NestedListsDemoController", NestedLists);

    /** @ngInject */
    function NestedLists($scope, GetJson) {

      var promiseAnswers = GetJson.getData("tree1");
      promiseAnswers.then(function(data){
        $scope.tree1 = data;
      });

      var promiseAnswers = GetJson.getData("tree2");
      promiseAnswers.then(function(data){
        $scope.tree2 = data;
      });

      var promiseAnswers = GetJson.getData("label_ENG");
      promiseAnswers.then(function(data){
        $scope.label = data;
      });

      $scope.ChangeLang = function(lang){
        var promiseAnswers = GetJson.getData(lang);
        promiseAnswers.then(function(data){
          $scope.label = data;
        });
      };

      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.dragItem = {
        beforeDrop: function(e) {
          console.log(e.dest)
          //.$modelValue.date = moment().format('MMMM Do YYYY, h:mm:ss a');
          function checkParent(node, actual){
            var x = node.$parentNodesScope.$parent; 
            if(!angular.isUndefined(x.$modelValue)){
              return (x.$modelValue.name != actual) ? checkParent(x, actual) : false;
            }
            else return true;
          }

          if(angular.isUndefined(e.dest.nodesScope.$parent.$modelValue)) return true;
          if(e.source.nodeScope.$modelValue.name == e.dest.nodesScope.$parent.$modelValue.name) return false;
          return checkParent(e.dest.nodesScope.$parent,e.source.nodeScope.$modelValue.name);
        },
        dropped: function(e) {
          var id = e.dest.index;
          e.dest.nodesScope.$modelValue[id].date = moment().format('MMMM Do YYYY, h:mm:ss a');  
        }
      };

    };

})();




