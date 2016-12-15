"use strict";

app.controller("HomeCtrl", function ($scope, $q, DataFactory) {

    $scope.playersArray = null;
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchPlayer = '';     // set the default search/filter term

    $scope.init = function () {
        if ($scope.dataCache == {}) {
            $scope.loadDataFromAPI();
        }
    }

    $scope.loadDataFromAPI = function () {
        $q.all([
            DataFactory.getAllPlayers(),
            DataFactory.getAverageStats()
            ])
        .then(function (data) {
            $scope.dataCache.playerData = data[0].data
            $scope.dataCache.avgPlayerStats = data[1].data
        })
    }

})