'use strict';

var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var Reservation;

var reservationSchema = mongoose.Schema({
	name: {type: String},
	date: {type: Date},
	partySize: {type: Number},
	checkin: {type: Boolean, default: false}
});

var Reservation = mongoose.model('Reservation', reservationSchema)


module.exports = Reservation;