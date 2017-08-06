// =============================================================
//              html routing for the stylist page
// =============================================================

$(document).ready(function() {
    console.log("file loaded");
    // Adding an event listener to the form to create a new object
    $(document).on("click", "#stylist-form", stylistFormSubmit);

    // A function to handle what happens when the form is submitted to create a new Author
    function stylistFormSubmit(event) {
        event.preventDefault();
        console.log("button clicked");
        var stylistObject = {
            first_name: $('#first-name').val().trim(),
            last_name: $('#last-name').val().trim(),
            email: $('#email').val().trim(),
            bio: $('#bio').val().trim(),
            experience: $('#experience').val(),
            phone_number: $('#phone-number').val(),

            cut: $('#cut').is(':checked'),
            blow_dry: $('#blow').is(':checked'),
            color: $('#color').is(':checked'),
            highlights: $('#highlights').is(':checked'),
            ombre: $('#ombre').is(':checked'),
            balayage: $('#balayage').is(':checked'),
            hair_do: $('#hairdo').is(':checked'),
            travel_range: $('#travel-range').val(),
            street_address: $('#address').val().trim(),
            city: $('#city').val().trim(),
            state: $('#state').val().trim(),
            zipcode: $('#zip-code').val().trim()
        };
        console.log(stylistObject);

        function createStylist(stylistData) {
            $.post("/api/stylist", stylistData)
        };
        createStylist(stylistObject)
    };
});