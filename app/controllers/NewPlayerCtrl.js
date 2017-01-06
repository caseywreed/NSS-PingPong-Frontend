"use strict";

app.controller("NewPlayerCtrl", function ($scope, $q, DataFactory) {

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

});