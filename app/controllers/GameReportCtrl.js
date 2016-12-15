"use strict";

app.controller("GameReportCtrl", function ($scope, $q, $location, DataFactory) {

    $scope.showGamePrompt = true
    $scope.showTwoPlayerGameForm = false
    $scope.showFourPlayerGameForm = false

    $scope.twoPlayerGame = {
        "playerOneId": null,
        "playerTwoId": null,
        "teamOneScore": null,
        "teamTwoScore": null
    }

    $scope.fourPlayerGame = {
        "playerOneId": null,
        "playerTwoId": null,
        "playerThreeId": null,
        "playerFourId": null,
        "teamOneScore": null,
        "teamTwoScore": null
    }

    $scope.init = function () {
        console.log("GameReportCtrl hooked up")
    }

    $scope.submitScores = function (game) {
        if ($scope.showTwoPlayerGameForm) {
            DataFactory.postSinglesGame(game)
            .then(function () {
                $scope.loadDataFromAPI()
                $location.url("/")
                })
            }
        if ($scope.showFourPlayerGameForm) {
            console.log("Posting a Four Player Game")
            DataFactory.postDoublesGame(game)
            .then(function () {
                $scope.loadDataFromAPI()
                $location.url("/")
            })
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