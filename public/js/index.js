$(document).ready(function() {
    console.log("file loaded");
    // Adding an event listener to the form to create a new object
    $(document).on("click", "#search-all", searchAll);

    function serviceSearch() {

        console.log("button clicked");
        return $('#service-search').val()
    }

    function distanceSearch() {

        console.log("button-clicked");
        return $('#distance').val()
    }

    function searchStylist(stylistData) {
        $.post("/list", stylistData)
    };

    function searchAll() { 
    	var svcSearch = serviceSearch();
    	var distSearch = distanceSearch();
    	searchStylist({
    		"specialty": svcSearch, 
    		"distance-search": distSearch
    	})
        console.log("search clicked");
        console.log(serviceSearch(), distanceSearch());

    }

});