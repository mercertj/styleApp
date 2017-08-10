// =============================================================
// 			Requesting the Stylist data from the server 
//						to build a list
// =============================================================
// "use strict"
(function(window, google){
  $(document).ready(function() {
    console.log("in module sortedlistrequest");
                console.log('====================================')
    getStylists();
      console.log("after call");
                console.log('====================================')
    $(document).on("click", "button", newSearch);

  	// This function grabs stylists from the database and 
  	// returns them sorted according to search parameters
  	function getStylists() {
        //  take in search parameters from the page and build a request
        console.log("stylists start");
        var params = (new URL(document.location)).searchParams;
        console.log('params ', params)
        var service = params.get("service");
        console.log('service ', service)
        var range = parseInt(params.get("range"));


        //  request data from server side
      	$.get("../api/stylist/search/" + service, function(data) {
      				console.log("stylists", data);
      				if (data) {
                console.log("how many = ", data.length);
                console.log('====================================')
                var marker;
                        //  populate a list on the page
                        for (var i = 0; i < data.length; i++) {
                            var display   = {
                                    // img       : (data.Stylist[i].img),
                                    id        : (data[i].id),
                                    name      : (data[i].first_name
                                                +" "
                                                +data[i].last_name),
                                    bio       : (data[i].bio),
                                    // services  : (data[i].services),
                                    // rating    : (data[i].Review.rating),
                                    lat       : (data[i].address_lat),
                                    long      : (data[i].address_long)
                            };
                            console.log('display = ', display)                            
                            //  dynamically build the display box
                            buildStylistDisplay(i, display);

                            //  populate markers on map
                            if ((display.lat !== null) && (display.long !== null)) {
                                console.log('latlong = '+ display.lat +" , "+display.long)
                                placeMarker(display.lat, display.long)   
                            }
                        }
              }
    	  });
    };


//===============================================================
//      new search
//===============================================================
    function newSearch() {
          window.location.href = "../list/?service=" + svcSearch +"&range=" + distSearch+"/"
    }
//===============================================================
//      populate list of stylists
//===============================================================!
    function buildStylistDisplay(i, display) {

      var headDiv = $('#boxlist');

      headDiv.append(
          $('<div/>', {'class': 'box'}).append(
              $('<article/>', {'class': 'media'}).append(
                  $('<div/>', {class: 'media-left'}).append(
                      $('<figure/>', {class: 'image is-64x64'}).append(
                          $('<img>', {src: 'http://bulma.io/images/placeholders/128x128.png',
                                      alt: 'Image'}
                           )
                      )
                  )
              ).append(
                  $('<div/>', {class: 'media-content'}).append(
                      $('<div/>', {class: 'content'}).append(
                          $('<p/>').append(
                              $('<strong/>', {class: 'name', text: display.name})
                          ).append(
                              $('<small/>', {class: 'username', text: '@JohnSmith'})
                          ).append(
                              $('<small/>', {class: 'minutes', text: '31m'})
                          ).append(
                              $('<br>')
                          )
                      ).append(
                          $('<p/>', {id: 'bio', text: display.bio})
                      ).append(
                          $('<p/>')
                      )
                  ).append(
                      $('<nav/>', {class: 'level is-mobile'}).append(
                          $('<div/>', {class: 'level-left'}).append(
                              $('<a/>', {class: 'level-item'}).append(
                                  //id of stylist hidden in the buttons
                                  $('<span/>', {class: 'tag is-primary', text: 'Email', value: display.id})
                              )
                          ).append(
                              $('<a/>', {class: 'level-item'}).append(
                                  $('<span/>', {class: 'tag is-primary', text: 'Profile', value: display.id})
                              )
                          ).append(
                              $('<a/>', {class: 'level-item'}).append(
                                  $('<span/>', {class: 'tag is-primary', text: 'Back'})
                              )
                          )
                      )
                  )
              )
          )
      );

    };      

//===============================================================
//      populate markers on map
//===============================================================
    function placeMarker (lat, long) {
        console.log('placeMarker')
        console.log('latlong = '+ lat +" , "+long)
        console.log('--------------------------------------------')
        var markerOptions = {
            center: new google.maps.LatLng(33.4457848, -117.6280111),
            position: { 
                        lat: lat, 
                        lng: long
                      },
            label: labels[labelIndex++ % labels.length],
        };
        marker = new google.maps.Marker(markerOptions);
        marker.setMap(map);
    };   

//===============================================================
//      populate markers' info windows on map
//===============================================================
// var latLngA = {33.4457848, -117.6280111}
// var latLngB = {33.4557848, -117.6280111}
// var dist = google.maps.geometry.spherical.computeDistanceBetween (latLngA, latLngB);
// console.log('distance = ', dist);

    // var infoWindowOptions = {
    //     content: 'Moscone Is Here!'
    // };

    // infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    // google.maps.event.addListener(marker,'click',function(e){
  
    //     infoWindow.open(map, marker);
  
    // });    
  });
})(window, google);

