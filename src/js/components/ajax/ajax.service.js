(function() {

  'use strict';
  const server = 'https://galvanize-student-apis.herokuapp.com/gdating';
  angular
    .module('myApp.components.ajax', [])
    .service('ajax', Ajax);
    Ajax.$inject = ['$http', '$q'];

  function Ajax($http, $q) {
    /*jshint validthis: true */
    const vm = this;
    //get all members
    vm.getMembers = () => $http.get(`${server}/members`);
    //get one member
    vm.getMember = (index) => $http.get(`${server}/members/${index}`);
    //get a random member
    vm.getRandomMember = () => {
      const offset = Math.ceil(Math.random() * 1000);
      return $http.get(`${server}/members?limit=1&offset=${offset}`);
    };
  }

})();
