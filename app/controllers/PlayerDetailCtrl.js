"use strict";

app.controller("PlayerDetailCtrl", function ($scope, $routeParams, $q, DataFactory) {

    $scope.player = null
    $scope.comparePlayer = null
    $scope.compareSearchId = 0

    // radar graph wins/losses/games
    $scope.radarGraphData = []
    $scope.radarColors = ['#BF0E00', '#016775', '#6FB100']
    $scope.radarLabels =["Games", "Wins", "Losses"]

    // radar graph wins/losses/games
    $scope.radarPercGraphData = []
    $scope.radarPercColors = ['#BF0E00', '#016775', '#6FB100']
    $scope.radarPercLabels =["Win %", "Singles Win %", "Doubles Win %"]

    $scope.radarOptions = {
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
    }

    $scope.init = function () {
        $scope.player = $scope.dataCache.playerData.filter(function (p) {
            return p.playerId == $routeParams.playerId
        })
        $scope.player = $scope.player[0]
        //Seeds W/L/G graph
        $scope.radarGraphData.push([
            $scope.player.stats.games,
            $scope.player.stats.wins,
            $scope.player.stats.losses
        ])
        //Seeds Percentage Graph
        $scope.radarPercGraphData.push([
            $scope.player.stats.winPercentage,
            $scope.player.stats.singlesWinPercentage,
            $scope.player.stats.doublesWinPercentage
        ])
        // Seeds Average Stats for W/L/G graph
        $scope.radarGraphData.push([
            $scope.$parent.dataCache.avgPlayerStats.games,
            $scope.$parent.dataCache.avgPlayerStats.wins,
            $scope.$parent.dataCache.avgPlayerStats.losses
        ])
        // Seeds Average Stats for Percentage Graph
        $scope.radarPercGraphData.push([
            $scope.$parent.dataCache.avgPlayerStats.winPercentage,
            $scope.$parent.dataCache.avgPlayerStats.singlesWinPercentage,
            $scope.$parent.dataCache.avgPlayerStats.doulesWinPercentage
        ])
    }

    $scope.getComparePlayer = function (id) {
        $scope.comparePlayer = $scope.dataCache.playerData.filter(function (p) {
            return p.playerId == id
        })
        $scope.comparePlayer = $scope.comparePlayer[0]
        $scope.radarGraphData.pop()
        $scope.radarPercGraphData.pop()
        $scope.radarGraphData.push([
            $scope.comparePlayer.stats.games,
            $scope.comparePlayer.stats.wins,
            $scope.comparePlayer.stats.losses
        ])
        $scope.radarPercGraphData.push([
            $scope.comparePlayer.stats.winPercentage,
            $scope.comparePlayer.stats.singlesWinPercentage,
            $scope.comparePlayer.stats.doublesWinPercentage
        ])
    }

})