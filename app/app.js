'use strict';

var app = angular.module('route', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/listing.html'
	}).
	when('/oneCtrl', {
		templateUrl: 'partials/one.html',
		controller: 'oneCtrl'
	}).
	when('/twoCtrl', {
		templateUrl: 'partials/two.html',
		controller: 'twoCtrl'
	}).
	otherwise('/');
});