
// =============================================================
// 				GOOGLE MAPS: displaying the map
// =============================================================
var map;
var infowindow;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
// module.exports = function(app) {
(function(window, google){
	
		var mapOptions = {
		    center: {
		    		 lat: 33.0457848,
		    		 lng: -117.2280111
		    		},
		    zoom: 12,
		    disableDefaultUI: false,
		    scrollwheel: true,
		    draggable: true,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		};	
	
		console.log(map)
		
		function initMap() {
			map = new google.maps.Map(document.getElementById('map-listpage'), mapOptions);
			infoWindow = new google.maps.InfoWindow;

			// Try HTML5 geolocation.
			if (navigator.geolocation) {
			  navigator.geolocation.getCurrentPosition(function(position) {
			    var pos = {
			      lat: position.coords.latitude,
			      lng: position.coords.longitude
			    };

			    // infoWindow.setPosition(pos);
			    // infoWindow.setContent('This is your location.');
			    // infoWindow.open(map);
			    map.setCenter(pos);
			  }, function() {
			    handleLocationError(true, infoWindow, map.getCenter());
			  });
			} else {
			  // Browser doesn't support Geolocation
			  handleLocationError(false, infoWindow, map.getCenter());
			}
		}

      	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        	infoWindow.setPosition(pos);
        	infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        	infoWindow.open(map);
      	}

      	initMap()

}(window, google));