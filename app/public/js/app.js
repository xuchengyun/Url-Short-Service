/**
 * Created by xuchengyun on 9/4/17.
 */
var app = angular.module("tinyurlApp", ["ngRoute", "ngResource", 'chart.js']);
//angular router
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./public/views/home.html",
            controller: "homeController"
        })
        .when("/urls/:shortUrl", {
            templateUrl: "./public/views/url.html",
            controller: "urlController"
        });
});
