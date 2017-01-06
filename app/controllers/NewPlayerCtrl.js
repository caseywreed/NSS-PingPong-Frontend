"use strict";

app.controller("NewPlayerCtrl", function ($scope, $location, DataFactory) {

    $scope.newPlayer = {
        "firebaseId": 0,
        "firstName": null,
        "lastName": null,
        "leftHanded": null,
        "cohort": null
    }

    $scope.init = function () {
        console.log("New player ctrl running")
    }

    $scope.postNewPlayer = function () {
        if (
        $scope.newPlayer.firstName != null &&
        $scope.newPlayer.lastName != null &&
        $scope.newPlayer.leftHanded != null &&
        $scope.newPlayer.cohort != null) {
            console.log("Valid form")
            DataFactory.postPlayer($scope.newPlayer)
            .then(function () {
                $scope.$parent.loadDataFromAPI()
                $location.url("/")
            })
        } else {
            console.log("Invalid form")
            return
        }
    }

});