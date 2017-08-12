// =============================================================
// 		GEOCODING: capturing the lat and long of user 			
// =============================================================

const request = require('request');
const haversine = require('haversine');

// Google long. lat. coordinates GEOCODING API
const geoApiKey = "AIzaSyBgJbLHnsulrsWKCcdJU1JI0d_wli6ppFk";

const geocodeString 		= 	"https://maps.googleapis.com/maps/api/geocode/json?address=";
const geocodeKey			= 	"&key=";
var	  userinput 			= 	"";
var   coordinatequeryURL	= 	"";

var getCoordinates = {

			fromStylist: function(user, callback) {

				userinput 	= 	user.street_address + "," +
								user.city + "," +
								user.state + "," +
								user.zipcode;

				coordinatequeryURL = 	geocodeString +
										userinput + 
										geocodeKey + 
										geoApiKey;

				coordinatequeryURL = coordinatequeryURL.replace(/ /g, "+");
				//	call to Google Geocoding service
				request(coordinatequeryURL, function(err, response, body) {
  					if (err) throw err;

			    // console.log(response.statusCode) // 200
			    // console.log(response.headers['content-type']) // 'image/png'
					res = JSON.parse(body);
					user.address_lat = (res.results[0].geometry.location.lat);
					user.address_long = (res.results[0].geometry.location.lng);

					callback(user);
				})					
 			},

			fromAddress: function(address, callback) {
				userinput 			= 	address;
				coordinatequeryURL 	= 	geocodeString +
										userinput + 
										geocodeKey + 
										geoApiKey;

				//	call to Google Geocoding service
				request(coordinatequeryURL, function(err, response, body) {
					if (err) throw err;

		    	// console.log(response.statusCode) // 200
		    	// console.log(response.headers['content-type']) // 'image/png'
					res = JSON.parse(body);
					var client = {
						lat : (res.results[0].geometry.location.lat),
						lng : (res.results[0].geometry.location.lng)
					}

					callback(client);
				});
			},

			inRange: function(p1, p2, range) {

				// returns the distance in miles
				return haversine(	{latitude: p1.lat, longitude: p1.lng},
										{latitude: p2.lat, longitude: p2.lng},
										{threshold: range, unit: 'mile'})
			}	
}

module.exports = getCoordinates;