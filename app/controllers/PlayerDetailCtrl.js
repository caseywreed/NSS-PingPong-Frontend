"use strict";

app.controller("PlayerDetailCtrl", function ($scope, $routeParams, $q, DataFactory) {

    $scope.player = null
    $scope.colors = ['#BF0E00', '#016775', '#6FB100'];
    $scope.labels =["Wins", "Losses", "Avg. Point Diff", "Win %"];

    $scope.data = []

    $scope.init = function () {
        console.log("TopCtrl data in PlayerDetailCtrl", $scope.$parent.playerDataCache.string)
        console.log("testVariable in PlayerDetailCtrl", $scope.$parent.testVariable)
        $q.all([
            DataFactory.getSinglePlayer($routeParams.playerId),
            DataFactory.getAverageStats()
            ])
        .then(function (data    ) {
            $scope.player = data[0].data;
            let statsArray = [
                data[0].data.stats.wins,
                data[0].data.stats.losses,
                data[0].data.stats.avgPointDiff,
                data[0].data.stats.winPercentage
            ]
            $scope.data.push(statsArray)
            let avgStatsArray = [
                data[1].data.wins,
                data[1].data.losses,
                data[1].data.avgPointDiff,
                data[1].data.winPercentage
            ]
            $scope.data.push(avgStatsArray)
        })
    }

})