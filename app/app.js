"use strict";

var app = angular.module("PingApp", ["ngRoute"])

app.config(function ($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "partials/cuepoint-login.html",
            controller: "CueLoginCtrl"
        otherwise('/')
})

app.run( ($location, FBCreds) => {
    let creds = FBCreds
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    }
    firebase.initializeApp(authConfig)
})