"use strict";

app.controller("HomeCtrl", function ($scope, $q, DataFactory) {

    $scope.playersArray = null;
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchPlayer = '';     // set the default search/filter term

    $scope.init = function () {
        if ($scope.$parent.dataCache.playerData == undefined) {
            console.log("inside the IF statement")
            $scope.$parent.loadDataFromAPI()
        }
    }

})