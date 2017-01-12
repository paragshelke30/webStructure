(function () {
  'use strict';

  angular
    .module('app.service')
    .factory('commonService', commonService);

  commonService.$inject = [
    '$timeout',
    '$mdDialog',
    '$mdToast',
    '$rootScope'
  ];

  function commonService(
    $timeout,
    $mdDialog,
    $mdToast,
    $rootScope) {
    var service = {
      timeout: $timeout,
      mdDialog: $mdDialog,
      mdToast: $mdToast,
      rootScope: $rootScope
    };

    return service;
  }
})();
