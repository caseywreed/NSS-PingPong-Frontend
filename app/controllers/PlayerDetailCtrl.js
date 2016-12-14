"use strict";

app.controller("PlayerDetailCtrl", function ($scope, $routeParams, DataFactory) {

    $scope.player = {}

    $scope.init = function () {
        console.log("routeParams id", $routeParams.playerId)
        DataFactory.getSinglePlayer($routeParams.playerId)
        .then(function(data) {
            console.log(data)
            $scope.player = data.data;
        })
    }

})