'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function homeController() {}
homeController.$inject = [];

function membersController($scope , io) {
   
   io.on('whitelist', function(data) {
	console.log(data);
	$scope.whitelist = data;
})
membersController.$inject = ['$scope' , 'io'];

function scriptsController() {
}
scriptsController.$inject = [];

