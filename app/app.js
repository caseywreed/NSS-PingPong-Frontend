"use strict";

//Two args: Name of Module, Array of Dependencies
// Just like var ng-route = require("app/js/etc.js")
var app = angular.module("PingApp", ["ngRoute", "chart.js"])
.constant("FirebaseURL", "INSERT THIS LATER")

app.config(function ($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "partials/main.html",
            controller: "HomeCtrl"
        }).
        when("/login", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when("/players/:playerId", {
            templateUrl: "partials/player-detail.html",
            controller: "PlayerDetailCtrl"
        }).
        when("/games/report", {
            templateUrl: "partials/game-report.html",
            controller: "GameReportCtrl"
        }).
        when("/newplayer", {
            templateUrl: "partials/new-player-form.html",
            controller: "NewPlayerCtrl"
        }).
        otherwise('/')
})
