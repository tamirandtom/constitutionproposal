var App = angular.module('app', []);



App.controller('index', function ($scope, $http) {
  $http.get('data/data.json')
    .then(function (res) {
      $scope.data = res.data;
      console.log($scope.data.categories);
    });
  $scope.filterage = 'rrrrrr';
  $scope.screen = 0;
var maxScreens = 12;
$scope.maxAttributes = 2;


  $scope.nextScreen = function() {
    if ($scope.screen < maxScreens)
    {
      $scope.screen++;      
    } 
  };


  $scope.prevScreen = function() {
    if ($scope.screen > 0)
    {
      $scope.screen--;      
    } 
  };
  
  $scope.isFinished = function(screen) {
    
    if (screen == 3 && $scope.screen1.total > $scope.maxAttributes) {return true;}
    else if (screen == 4 && $scope.screen2.total > $scope.maxAttributes) {return true;}
    else if (screen == 5 && $scope.screen3.total > $scope.maxAttributes) {return true;}
    else if (screen == 6 && $scope.screen4.total > $scope.maxAttributes) {return true;}
    else if (screen == 7 && $scope.screen5.total > $scope.maxAttributes) {return true;}
    else if (screen == 8 && $scope.screen6.total > $scope.maxAttributes) {return true;}
    else if (screen == 9 && $scope.screen7.total > $scope.maxAttributes) {return true;}
    else if (screen == 10 && $scope.screen8.total > $scope.maxAttributes) {return true;}
    else if (screen == 11 && $scope.screen9.total > $scope.maxAttributes) {return true;} else {
      return false;
    }
  }
  $scope.countScreen = function(ele) {
    $scope.screen1.total=0;
    $scope.screen2.total=0;
    $scope.screen3.total=0;
    $scope.screen4.total=0;
    $scope.screen5.total=0;
    $scope.screen6.total=0;
    $scope.screen7.total=0;
    $scope.screen8.total=0;
    $scope.screen9.total=0;

    for (i=1;i<10;i++) {if ($scope.screen1['prop'+i]) {$scope.screen1.total++} }
    for (i=1;i<9;i++) {if ($scope.screen2['prop'+i]) {$scope.screen2.total++} }
    for (i=1;i<11;i++) {if ($scope.screen3['prop'+i]) {$scope.screen3.total++} }
    for (i=1;i<14;i++) {if ($scope.screen4['prop'+i]) {$scope.screen4.total++} }
    for (i=1;i<6;i++) {if ($scope.screen5['prop'+i]) {$scope.screen5.total++} }
    for (i=1;i<5;i++) {if ($scope.screen6['prop'+i]) {$scope.screen6.total++} }
    for (i=1;i<10;i++) {if ($scope.screen7['prop'+i]) {$scope.screen7.total++} }
    for (i=1;i<8;i++) {if ($scope.screen8['prop'+i]) {$scope.screen8.total++} }
    for (i=1;i<15;i++) {if ($scope.screen9['prop'+i]) {$scope.screen9.total++} }
  
    console.log($scope.screen1.total);
  };





});




