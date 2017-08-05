
// =============================================================
//              html routing for the client page
// =============================================================

$(document).ready(function() {

	// Adding an event listener to the form to create a new object
	$(document).on("submit", "#client-form", clientFormSubmit);

	// A function to handle what happens when the form is submitted to create a new Author
	function clientFormSubmit(event) {
		event.preventDefault();

		var clientObject = {
								first_name		: $('#'),
								last_name		: $('#'),
								email			: $('#'),
								street_address	: $('#'),
								city			: $('#'),
								state 			: $('#'),
								zipcode			: $('#')
							};
		function createClient(clientData) {
    		$.post("/api/client", clientData)
  		};
	}; 
});
