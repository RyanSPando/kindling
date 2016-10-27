(function() {

  'use strict';

  angular
    .module('myApp.config',[])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'js/components/register/register.view.html',
        controller: 'registerController',
        controllerAs: 'registerCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'js/components/login/login.view.html',
        controller: 'loginController',
        controllerAs: 'loginCtrl'
      });

    $locationProvider.html5Mode(true);
  }
})();
