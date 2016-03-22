'use strict';


var app = angular.module('reservationApp');

// inject the dependency in it via $scope
app.controller('listCtrl', function($scope, $http, reserService) {
  console.log('woo! listCtrl!');


  reserService.fetch()
    .then(function(res) {
        console.log('res: ', res);
        var reservations = res.data;
        
        $scope.reservations = reservations;
      }, function(err) {
        console.error('err: ', err);
    });

  $scope.check = function (reservation, checkin) {
    console.log('checkin: ', checkin)
    // $http.put(`/reservations/checkin/${reservation._id}`, checkin);
    reserService.checkin(reservation, checkin)
    .then(function(err, res){
      console.log(res)
    })
  } 

  $scope.addReservation = function (newReservation){
    console.log("newReservation: ", newReservation.date)
    reserService.create(newReservation)
      .then(function(res) {
        $scope.reservations.push(res.data) 
      }, function(err) {
        console.error('err:', err);
      })
  }
  


  $scope.editDetail = function(reservation) {
    $scope.listEd = angular.copy(reservation);
  }

  $scope.updateReservation = function(editedReservation) {
    reserService.update($scope.editObj)
      .then(function(res) {
        $scope.reservations.splice(editedReservation, 1, $scope.editObj)
        swal("Good job!", "You edited the detail" , "success")
        // console.log("scope editObj: ", $scope.editObj);
      }, function(error) {
        console.log("errors from put");
      });
  }

  $scope.removeReservation = function(reservation) { 
    console.log("reservation: ", reservation)
    // debugger;
  reserService.remove(reservation)
      .then(function() {  
        var index = $scope.reservations.indexOf(reservation);
        $scope.reservations.splice(index, 1);
        swal("You successfully deleted this!")
      }, function(err) {
        console.error('err:', err);
      })
  };
  
});