(function() {

  'use strict';

  angular
    .module('myApp.components.navbar', [])
    .directive('alNavbar', navDirective);

  function navDirective() {
    /*jshint validthis: true */
    return {
      restrict: 'E',
      bindToController: true,
      controller: Controller,
      controllerAs: 'navCtrl',
      link: link,
      templateUrl: 'js/components/navbar/navbar.view.html'

    };

    function link(scope, elem, attr, vm) {

    }
  }
  Controller.$inject = ['$scope', '$location'];
  function Controller($scope, $location) {
  }
})();
