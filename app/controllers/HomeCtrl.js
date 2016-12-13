"use strict";

app.controller("HomeCtrl", function ($scope, DataFactory) {

    $scope.playersArray = []

    $scope.init = function () {
        console.log("HomeCtrl running")
        DataFactory.getAllPlayers()
        .then(function (data) {
            console.log(data)
            $scope.playersArray.push(data.data)
        })
    }

    $scope.getOnePlayer = function () {
        console.log("Inside getOnePlayer")
        DataFactory.getSinglePlayer();
    }

})