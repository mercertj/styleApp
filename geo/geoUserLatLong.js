// =============================================================
// 		GEOCODING: capturing the lat and long of user 			
// =============================================================

const request = require('request');

var getCoordinates = (user, callback) => {

	// Google long. lat. coordinates GEOCODING API
	const geoApiKey = "AIzaSyBgJbLHnsulrsWKCcdJU1JI0d_wli6ppFk";

	const geocodeString = 	"https://maps.googleapis.com/maps/api/geocode/json?address=";
	const geocodeKey	= 	"&key=";
	const userinput 	= 	user.street_address + "," +
							user.city + "," +
							user.state + "," +
							user.zipcode;
	
	var   coordinatequeryURL = 	geocodeString +
								userinput + 
								geocodeKey + 
								geoApiKey;

	coordinatequeryURL = coordinatequeryURL.replace(/ /g, "+");
	console.log('url ', coordinatequeryURL)

//				call to Google Maps
// ===============================================
	request(coordinatequeryURL, function(err, response, body) {
  				if (err) throw err;

  				var result;

			    // console.log(response.statusCode) // 200
			    // console.log(response.headers['content-type']) // 'image/png'
				res = JSON.parse(body);
				console.log(body);
				console.log(userinput);
				user.address_lat = (res.results[0].geometry.location.lat);
				user.address_long = (res.results[0].geometry.location.lng);
				console.log("Lat: "+user.lat);
				// console.log("results: ", body.results);
				console.log("Lng: "+user.lng);

				callback(user);
	});
};

module.exports = getCoordinates;