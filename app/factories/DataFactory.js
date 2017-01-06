'use strict';

app.factory("DataFactory", ($http, $q) => {

    const getAllPlayers = function () {
        return $q((resolve,reject) => {
            $http({
                method: 'GET',
                url: 'https://nss-pingpong-api20161212012918.azurewebsites.net/api/Players/'
            }).then(function successCallback(data) {
                console.log(data)
                resolve(data)
            }, function errorCallback(error) {
                console.log(error)
            });
        })
    }

    const getSinglePlayer = function (id) {
        return $q((resolve,reject) => {
            $http({
                method: 'GET',
                url: `https://nss-pingpong-api20161212012918.azurewebsites.net/api/Players/${id}`
            }).then(function successCallback(data) {
                console.log(data)
                resolve(data)
            }, function errorCallback(error) {
                console.log(error)
            });
        })
    }

    const getAverageStats = function () {
        return $q((resolve,reject) => {
            $http({
                method: 'GET',
                url: `https://nss-pingpong-api20161212012918.azurewebsites.net/api/Reports/GetAverageStats`
            }).then(function successCallback(data) {
                console.log(data)
                resolve(data)
            }, function errorCallback(error) {
                console.log(error)
            });
        })
    }

    const postSinglesGame = function (game) {
        return $q((resolve,reject) => {
            $http.post("https://nss-pingpong-api20161212012918.azurewebsites.net/api/Reports/TwoPlayerGame", game)
            .then(function successCallback(data) {
                console.log(data)
                resolve(data)
            }, function errorCallback(error) {
                console.log(error)
            });
        })
    }

    const postDoublesGame = function (game) {
        return $q((resolve,reject) => {
            $http.post("https://nss-pingpong-api20161212012918.azurewebsites.net/api/Reports/FourPlayerGame", game)
            .then(function successCallback(data) {
                console.log(data)
                resolve(data)
            }, function errorCallback(error) {
                console.log(error)
            });
        })
    }

    const postPlayer = function (player) {
        return $q((resolve,reject) => {
            $http.post("https://nss-pingpong-api20161212012918.azurewebsites.net/api/Players", player)
            .then(function successCallback(data) {
                console.log(data)
                resolve(data)
            }, function errorCallback(error ) {
                console.log(error)
            });
        })
    }

    return {getAllPlayers, getSinglePlayer, getAverageStats, postSinglesGame, postDoublesGame, postPlayer}

})