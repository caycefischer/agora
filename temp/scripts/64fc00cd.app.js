'use strict';

var agoraApp = angular.module('agoraApp', [])
  .config(['$routeProvider', function($routeProvider) {
    
    // here put conditional cookie logic for logged in or out

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
