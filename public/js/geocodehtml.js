// =============================================================
// 			GEOCODING: capturing the lat and long of 
//					stylist and client
// =============================================================
"use strict"
// require(models)

// module.exports = function(app) {
	const geoApiKey = "AIzaSyBgJbLHnsulrsWKCcdJU1JI0d_wli6ppFk";

	// Stylist.address_coord = {
	// 						 15.46546,
	// 						 -66.45458836
	// 						};
	// Stylist.alt_location_coord = {
	// 								16.456546,
	// 								-66.45458836
	// 							 };
	var User = {};

	User.lat  = 34.4457848;
	User.long = -117.6280111;

	var Stylist = {};

	Stylist.street_address  =  '2239 avenida oliva'
	Stylist.city 			=  'san clemente'
	Stylist.state 			=  'ca'
	Stylist.zipcode			=  '92376'

	// Google long. lat. coordinates GEOCODING API
	const geocodeString = 	"https://maps.googleapis.com/maps/api/geocode/json?address=";
	const geocodeKey	= 	"&key=";
	const userinput 	= 	Stylist.street_address + "," +
							Stylist.city + "," +
							Stylist.state + "," +
							Stylist.zipcode;
	
	var   coordinatequeryURL = 	geocodeString +
								userinput + 
								geocodeKey + 
								geoApiKey;

	coordinatequeryURL = coordinatequeryURL.replace(/ /g, "+");

	$.ajax({
		url: coordinatequeryURL,
		method: "GET"
	}).done(function(response) {

		console.log(response);
		console.log(userinput);
		var lat = (response.results[0].geometry.location.lat);
		var long = (response.results[0].geometry.location.lng);
		console.log("Lat: "+lat);
		console.log("Lng: "+long);
		console.log(response.status)

		// var map = new google.maps.Map(document.getElementById('map'), {
		// 	center: {lat: lat, lng: long},
		// 	zoom: 15
		// });
		// var infowindow = new google.maps.InfoWindow();
		// var service = new google.maps.places.PlacesService(map);
		// service.nearbySearch({
		// 	location: {lat: lat, lng: long},
		// 	radius: 500,
		// 	type: [PoI],
		// 	name: nameofPOI
		// }, callback);
		var mapOptions = {
		    center: {lat: 37.7831,
		    		 lng:-122.4039
		    		},
		    zoom: 12,
		    // mapTypeId: google.maps.MapTypeId.ROADMAP
		};	

		new google.maps.Map(document.getElementById('map'), mapOptions);
		console.log(map)

	});
