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
            }, function errorCallback(data) {
                // called asynchronously if an error occurs
                // or server returns data with an error status.
            });
        })
    }

    const getAverageStats = function () {
        console.log("getAverageStats running")
        return $q((resolve,reject) => {
            $http({
                method: 'GET',
                url: `https://nss-pingpong-api20161212012918.azurewebsites.net/api/Reports/GetAverageStats`
            }).then(function successCallback(data) {
                console.log(data)
                resolve(data)
            }, function errorCallback(data) {
                // called asynchronously if an error occurs
                // or server returns data with an error status.
            });
        })
    }

    return {getAllPlayers, getSinglePlayer, getAverageStats}

})