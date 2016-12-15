"use strict";

app.controller("GameReportCtrl", function ($scope, $q, DataFactory) {

    $scope.showGamePrompt = true
    $scope.showTwoPlayerGameForm = false
    $scope.showFourPlayerGameForm = false
    $scope.twoPlayerGameQuestion = null

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

    // $scope.sendReport = function () {
    //     if (twoPlayerGameQuestion) {
    //         // Post to Reports/TwoPlayerGame
    //         // Sending the twoPlayerGame object
    //     } else {
    //         //Post to Reports/FourPlayerGame
    //         // Sending the fourPlayerGame object
    //     }
    // }

})