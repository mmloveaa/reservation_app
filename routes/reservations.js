'use strict';

 var express = require('express');
 var router = express.Router();

 var Reservation = require('../models/reservation.js');


 router.get('/', function (req, res) {
 		Reservation.find({} , function (err, reservations) {
 			if(err) {
			res.status(400).send(err);
			return;
		} 
    res.send(reservations);
  });
 });


 router.post('/', function (req,res) {
 		var newReservation = req.body;

 		Reservation.create(newReservation, function (err, savedReservation) {
 			if(err) {
      res.status(400).send(err);
    } else {
      res.send(savedReservation);
    }
 		})
 })

 router.put('/:id', function (req, res) {
 		Reservation.findById(req.params.id , function (err, reservation) {
 			if(err) {
				console.log(err);
			} else {
				console.log('reservation:', reservation);
			}
			res.send(reservation);
 		});
 });

 router.put('/:id/:checkin', function (req, res) {
 	  Reservation.findByIdAndUpdate(req.params.id, {$set: {checkin: req.params.checkin}} , function(err, updatedCheckIn) {
 		  if(err) {
				console.log(err);
			} else {
				console.log('reservation:', updatedCheckIn);
			}

 	  }); 
 });

 router.delete('/:id', function (req,res) {
 	 Reservation.findByIdAndRemove(req.params.id , function (err, reservation) {
	 	 	if(err) {
	      res.status(400).send(err);
	    } else {
	      res.send();
	    }
 	 });
 });



 module.exports = router;