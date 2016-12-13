"use strict";

//Two args: Name of Module, Array of Dependencies
// Just like var ng-route = require("app/js/etc.js")
var app = angular.module("PingApp", ["ngRoute"])
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
        otherwise('/')
})
