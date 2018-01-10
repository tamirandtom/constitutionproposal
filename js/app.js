var App = angular.module('app', []);



App.controller('index', function ($scope, $http) {
  $scope.screen = 0;
var maxScreens = 13;
$scope.maxAttributes = 2;


// Get country

$.get("https://ipinfo.io", function(response) {
   
$scope.currLocation = response.city+", "+response.country;
    
}, "jsonp");


// Get date

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;


$scope.currDate = today;


  $scope.nextScreen = function() {
    if ($scope.screen < maxScreens)
    {
      $scope.screen++;      
    } 
    if ($scope.screen==12)
    {

      setTimeout(function () {
        $scope.$apply(function () {
        $scope.screen=13;    
              });
    }, 3000);
    }
  };



  $scope.prevScreen = function() {
    if ($scope.screen > 0)
    {
      $scope.screen--;      
    } 
  };


  $scope.restartAll = function() {
    for (i=1;i<10;i++) { $scope.screen1['prop'+i] = false; $scope.screen1.total=0;}
    for (i=1;i<9;i++) { $scope.screen2['prop'+i] = false; $scope.screen2.total=0; }
    for (i=1;i<12;i++) { $scope.screen3['prop'+i] = false; $scope.screen3.total=0; }
    for (i=1;i<14;i++) { $scope.screen4['prop'+i] = false; $scope.screen4.total=0; }
    for (i=1;i<6;i++) { $scope.screen5['prop'+i] = false; $scope.screen5.total=0; }
    for (i=1;i<5;i++) { $scope.screen6['prop'+i] = false; $scope.screen6.total=0; }
    for (i=1;i<10;i++) { $scope.screen7['prop'+i] = false; $scope.screen7.total=0;}
    for (i=1;i<8;i++) { $scope.screen8['prop'+i] = false; $scope.screen8.total=0; }
    for (i=1;i<15;i++) { $scope.screen9['prop'+i] = false; $scope.screen9.total=0; }
    $scope.screen = 0;

  };


  $scope.areThereMoreWChildern = function(screennum) {
 if ($('.screen'+screennum+' .property--c.active-item').length < $('.screen'+screennum+' .property--w.active-item').length) {
   return true;
 } else {
   return false;
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
    for (i=1;i<12;i++) {if ($scope.screen3['prop'+i]) {$scope.screen3.total++} }
    for (i=1;i<14;i++) {if ($scope.screen4['prop'+i]) {$scope.screen4.total++} }
    for (i=1;i<6;i++) {if ($scope.screen5['prop'+i]) {$scope.screen5.total++} }
    for (i=1;i<5;i++) {if ($scope.screen6['prop'+i]) {$scope.screen6.total++} }
    for (i=1;i<10;i++) {if ($scope.screen7['prop'+i]) {$scope.screen7.total++} }
    for (i=1;i<8;i++) {if ($scope.screen8['prop'+i]) {$scope.screen8.total++} }
    for (i=1;i<15;i++) {if ($scope.screen9['prop'+i]) {$scope.screen9.total++} }
  
    // console.log($scope.screen1.total);
  };


  $scope.print = function() {
    Popup($('.to-print').html());
}

function Popup(data) {
    var mywindow = window.open('', 'new div', 'height=400,width=600');
    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write( "<link rel=\"stylesheet\" href=\"css/print.css\" type=\"text/css\" media=\"all\"/>" );
    mywindow.document.write('</head><body>');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');
    setTimeout(function () {
      mywindow.print();
    mywindow.close();
  }, 500);

    

    return true;
}


});


// disables double tapping zoom on ipad
(function($) {
  $.fn.nodoubletapzoom = function() {
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);




