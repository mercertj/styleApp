// =============================================================
//              html routing for the client page
// =============================================================

$(document).ready(function() {

    // Adding an event listener to the form to create a new object
    $(document).on("click", "#client-form", clientFormSubmit);

    // A function to handle what happens when the form is submitted to create a new Author
    function clientFormSubmit(event) {
        event.preventDefault();
        console.log("button clicked");
        var clientObject = {
            first_name: $('#first-name').val().trim(),
            last_name: $('#last-name').val().trim(),
            email: $('#email').val().trim(),
            street_address: $('#address').val().trim(),
            city: $('#city').val().trim(),
            state: $('#state').val().trim(),
            zipcode: $('#zip-code').val().trim(),
        };
        console.log(clientObject);

        function createClient(clientData) {
            $.post("/api/client", clientData)
        };
        createClient(clientObject)
    };
});