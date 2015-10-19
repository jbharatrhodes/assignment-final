(function() {
  'use strict';
  
  angular
    .module('app')
    .controller('AdController', AdController);
    
   AdController.$inject = ['$http'];
    
    function AdController($http) {
      var vm = this;
      
      $http.get('/api/ad')
        .then(function(response) {
          vm.ad = response.data
        },
        function(reason) {
          console.log(reason);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
}());