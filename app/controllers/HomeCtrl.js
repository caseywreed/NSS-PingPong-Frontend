"use strict";

app.controller("HomeCtrl", function ($scope, DataFactory) {

    $scope.playersArray = null;
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchPlayer = '';     // set the default search/filter term

    $scope.init = function () {
        console.log("HomeCtrl running")
        DataFactory.getAllPlayers()
        .then(function (data) {
            $scope.playersArray = data.data
            $scope.playerDataCache.playerData = data.data
            console.log("testVariable", $scope.$parent.testVariable)
            console.log("testVariable", $scope.$parent.playerDataCache)

        })
    }

})