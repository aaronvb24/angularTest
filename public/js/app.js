'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/homePartial', controller: homeController});
    $routeProvider.when('/members', {templateUrl: 'partials/membersPartial', controller: membersController});
    $routeProvider.when('/scripts', {templateUrl: 'partials/scriptsPartial', controller: scriptsController});
    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
  }]);
