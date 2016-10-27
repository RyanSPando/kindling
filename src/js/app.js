// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ui.router',
      'ngAnimate',
      'ngSanitize',
      'ui.bootstrap.tpls',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.navbar',
      'myApp.components.ajax',
      'myApp.components.carousel'
    ]);

})();
