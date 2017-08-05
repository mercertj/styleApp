
// =============================================================
//              html routing for the stylist page
// =============================================================

$(document).ready(function() {

	// Adding an event listener to the form to create a new object
	$(document).on("submit", "#stylist-form", stylistFormSubmit);

	// A function to handle what happens when the form is submitted to create a new Author
	function stylistFormSubmit(event) {
		event.preventDefault();

		var stylistObject = {
								first_name		: $('#'),
								last_name		: $('#'),
								email			: $('#'),
								bio				: $('#'),
								experience		: $('#'),
								phone_number	: $('#'),
								speciality		: $('#'),
								travel_range	: $('#'),
								street_address	: $('#'),
								city			: $('#'),
								state 			: $('#'),
								zipcode			: $('#')
							};
		function createStylist(stylistData) {
    		$.post("/api/stylist", stylistData)
  		};
	}; 
});
