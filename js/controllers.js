'use strict';

/* Controllers */

var waimaiApp = angular.module('waimaiApp', []);

waimaiApp.controller('foodListCtrl',  function($scope, $http) {
  $http.get('json/food.json').success(function(data) {
    $scope.items = data;
  });
  $scope.price='price';
});
