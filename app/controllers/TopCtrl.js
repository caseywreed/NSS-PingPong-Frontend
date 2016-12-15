"use strict";

app.controller("TopCtrl", function ($scope, $q, DataFactory) {

    $scope.dataCache = {}

    $scope.loadDataFromAPI = function () {
        console.log("Loading data from API")
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