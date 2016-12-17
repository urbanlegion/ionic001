(function () {
  'use strict';

  angular.module('eliteChat').factory('LocationCtrl', ['eliteApi', LocationCtrl]);

  function LocationCtrl(eliteApi){
    var vm = this;

    var data = eliteApi.getLeagueData();
    vm.locations = data.locations;
  }


})();
