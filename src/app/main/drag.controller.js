(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller("NestedListsDemoController", NestedLists);

    /** @ngInject */
    function NestedLists($scope, GetJson) {

      var promiseAnswers = GetJson.getData("baza");
      promiseAnswers.then(function(data){
        $scope.models = data;
      });

      var promiseAnswers = GetJson.getData("label_ENG");
      promiseAnswers.then(function(data){
        $scope.label = data;
      });

      $scope.ChangeLang = function(lang){
        var promiseAnswers = GetJson.getData(lang);
        promiseAnswers.then(function(data){
          console.log(data.LContainer);
          $scope.label = data;
        });
      }

      /*  $scope.onDrop = function(index){
          if (index.nest == true){
            index.nest = false;
            console.log("2",index.nest);
            console.log("tutaj");
            return index;
          }
        }*/

        $scope.onDropRight = function(item){
          if (item.nest == true){
            item.nest = false;
            item.right = false;
            item.date = moment().format('MMMM Do YYYY, h:mm:ss a');
            return item;
          }
        }

        $scope.onDropLeft = function(item){
          if (item.nest == true || !item.right){
            item.nest = false;
            item.right = false;
            item.date = moment().format('MMMM Do YYYY, h:mm:ss a');
            return item;
          }
        }

        $scope.check = function(a){
          console.log("position on drop",a);
          return true;
        }

    };

})();








