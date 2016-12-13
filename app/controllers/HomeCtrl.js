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
        })
    }

    $scope.orderByFunction = function(p){
        return parseInt(p.stats.wins, p.stats.losses);
    };

    $scope.getOnePlayer = function () {
        console.log("Inside getOnePlayer")
        DataFactory.getSinglePlayer();
    }

})