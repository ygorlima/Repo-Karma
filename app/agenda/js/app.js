'use strict';

angular.module('app', [
  'ngRoute',
  'app.controllers',
  'app.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {templateUrl: 'agenda.html', controller: 'ContatoCtrl'})
  .when('/new', {templateUrl: 'form.html', controller: 'ContatoCtrl'})
  .when('/edit/:id',{templateUrl:'form.html', controller:'EditContatoCtrl'})
  .otherwise({redirectTo: '/'});
}]);