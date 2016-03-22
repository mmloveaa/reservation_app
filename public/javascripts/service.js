'use strict';

var app = angular.module('reservationApp');

app.service('reserService' , function ($http){

		// this.sayHi = function($http) {
		// 	console.log('hi!');
		// };

		this.fetch = function() {
			console.log('in fetch')
			return $http.get('/reservations');
		};

		this.create = function(newReservation) {
			return $http.post('/reservations', newReservation);
		};

		this.remove = function(reservation) {
			console.log(reservation)
			return $http.delete(`/reservations/${reservation._id}`);
		};

		this.update = function(editedReservation) {
			return $http.put(`/reservations/${editedReservation._id}`, editedReservation);
		};

		this.checkin = function(reservation, checkin) {
			return $http.put(`/reservations/${reservation._id}/${checkin}`);
		};

});
