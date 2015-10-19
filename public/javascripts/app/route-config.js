(function() {
  'use strict';

  angular
    .module('app')
    .config(config)

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/ad', {
        templateUrl: '/javascripts/app/ad/ad.html',
        controller: 'AdController',
        controllerAs: 'vm'
      });
  }
}());