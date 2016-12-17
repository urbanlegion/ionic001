(function () {
  'use strict';

  angular.module('eliteChat').controller('LeaguesCtrl', ['$state', 'eliteApi',LeaguesCtrl]);

  function LeaguesCtrl($state, eliteApi){
    var vm = this;
    vm.leagues = eliteApi.getLeagues();

    vm.selectLeague = function (leagueId) {

      $state.go("app.teams");

    };


  }
})();
