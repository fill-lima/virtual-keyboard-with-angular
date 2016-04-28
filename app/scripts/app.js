'use strict';

/**
 * @ngdoc overview
 * @name virtualKeyboardWithAngularApp
 * @description
 * # virtualKeyboardWithAngularApp
 *
 * Main module of the application.
 */
angular
  .module('virtualKeyboardWithAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/korean', {
        templateUrl: 'views/korean.html',
        controller: 'KoreanCtrl',
        controllerAs: 'korean'
      })
      .otherwise({
        redirectTo: '/'
      });
  });