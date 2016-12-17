(function () {
  'use strict';

  angular.module('eliteChat').controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);

  function TeamsCtrl(eliteApi){
    var vm = this;

    var data = eliteApi.getLeagueData();
    vm.teams = data.teams;

  }
})();
