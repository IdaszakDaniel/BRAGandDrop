(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('GetJson', GetJson);

    function GetJson($http, $q) {
      return {
        getData:  function(file) {
          return $http.get(file+'.json').then(function(response) {
            return response.data;
          });
        }
      };
    }
})();
