"use strict";

app.controller("PlayerDetailCtrl", function ($scope, $routeParams, $q, DataFactory) {

    $scope.player = null;
    $scope.comparePlayer = null;
    $scope.compareSearchId = 0;

    // radar graph wins/losses/games
    $scope.radarGraphData = [];
    $scope.colors = ['#BF0E00', '#016775', '#6FB100'];
    $scope.radarLabels =["Games", "Wins", "Losses"];

    // radar graph wins/losses/games
    $scope.radarPercGraphData = [];
    $scope.radarPercLabels =["Win %", "Singles Win %", "Doubles Win %"];

    // point diff bar charts
    $scope.pointDiffData = [];
    $scope.pointDiffLabels =["Avg. Point Differential"];

    // rating data bar chart
    $scope.ratingData = [];
    $scope.ratingLabels =["Calculated Player Rating"];

    $scope.radarOptions = {
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    };

    $scope.barOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };

    $scope.init = function () {
        console.log("sup it's the hick from french lick")
        $scope.player = $scope.dataCache.playerData.filter(function (p) {
            return p.playerId == $routeParams.playerId
        });
        $scope.player = $scope.player[0];
        $scope.seedInitialData()
    };

    $scope.seedInitialData = function () {
        $scope.seedRadarGraphData();
        $scope.seedPercentageGraphData();
        $scope.seedPointDiffData();
        $scope.seedRatingData();
    };

    $scope.seedRadarGraphData = function () {
        $scope.radarGraphData.push([
                $scope.player.stats.games,
                $scope.player.stats.wins,
                $scope.player.stats.losses
            ],
            [
                ($scope.$parent.dataCache.avgPlayerStats.wins + $scope.$parent.dataCache.avgPlayerStats.losses),
                $scope.$parent.dataCache.avgPlayerStats.wins,
                $scope.$parent.dataCache.avgPlayerStats.losses
            ])
    }

    $scope.seedPercentageGraphData = function () {
        $scope.radarPercGraphData.push([
                $scope.player.stats.winPercentage,
                $scope.player.stats.singlesWinPercentage,
                $scope.player.stats.doublesWinPercentage
            ],
            [
                $scope.$parent.dataCache.avgPlayerStats.winPercentage,
                $scope.$parent.dataCache.avgPlayerStats.singlesWinPercentage,
                $scope.$parent.dataCache.avgPlayerStats.doublesWinPercentage
            ]);
    }

    $scope.seedPointDiffData = function () {
        $scope.pointDiffData.push(
            [$scope.player.stats.avgPointDiff],
            [$scope.$parent.dataCache.avgPlayerStats.avgPointDiff]
        );
    }

    $scope.seedRatingData = function () {
        $scope.ratingData.push(
            [$scope.player.stats.rating],
            [$scope.$parent.dataCache.avgPlayerStats.rating]
        )
    }

    $scope.getComparePlayer = function (id) {
        if (id === "averagePlayer")
        {
            $scope.radarGraphData = []
            $scope.radarPercGraphData = []
            $scope.pointDiffData = []
            $scope.ratingData = []
            $scope.comparePlayer = null
            $scope.seedInitialData()

        } else {
            //Grab a new player to compare
            $scope.comparePlayer = $scope.dataCache.playerData.filter(function (p) {
                return p.playerId == id
            });
            $scope.comparePlayer = $scope.comparePlayer[0];

            // Clear out second dataset
            $scope.radarGraphData.pop();
            $scope.radarPercGraphData.pop();
            $scope.pointDiffData.pop();
            $scope.ratingData.pop();

            $scope.seedComparePlayerData();
        }
    }

    $scope.seedComparePlayerData = function () {
        $scope.radarGraphData.push([
            $scope.comparePlayer.stats.games,
            $scope.comparePlayer.stats.wins,
            $scope.comparePlayer.stats.losses
        ]);
        $scope.radarPercGraphData.push([
            $scope.comparePlayer.stats.winPercentage,
            $scope.comparePlayer.stats.singlesWinPercentage,
            $scope.comparePlayer.stats.doublesWinPercentage
        ]);
        $scope.pointDiffData.push(
            [$scope.comparePlayer.stats.avgPointDiff]
        );
        $scope.ratingData.push(
            [$scope.comparePlayer.stats.rating]
        );
    }

});