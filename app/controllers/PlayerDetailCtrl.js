"use strict";

app.controller("PlayerDetailCtrl", function ($scope, $routeParams, $q, DataFactory) {

    $scope.player = null
    $scope.colors = ['#BF0E00', '#016775', '#6FB100'];
    $scope.labels =["Wins", "Losses", "Avg. Point Diff", "Win %"];

    $scope.graphData = []

    $scope.init = function () {
        $scope.player = $scope.dataCache.playerData.filter(function (p) {
            return p.playerId == $routeParams.playerId
        })
        $scope.player = $scope.player[0]
        $scope.graphData.push([
            $scope.player.stats.wins,
            $scope.player.stats.losses,
            $scope.player.stats.avgPointDiff,
            $scope.player.stats.winPercentage
        ])
        $scope.graphData.push([
            $scope.$parent.dataCache.avgPlayerStats.wins,
            $scope.$parent.dataCache.avgPlayerStats.losses,
            $scope.$parent.dataCache.avgPlayerStats.avgPointDiff,
            $scope.$parent.dataCache.avgPlayerStats.winPercentage
        ])
    }

})