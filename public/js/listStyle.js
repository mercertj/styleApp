var signedInUsername = $('#signed-in-name').hide();
var signOutBtn = $('#sign-out-btn').hide();
var profile = $('#stylistProfile');

$('#modal-btn-one').on('click', function() {
    $('#modal-one').fadeIn("fast", function() {});
});

$('#modal-btn-two').on('click', function() {
    $('#modal-two').fadeIn("fast", function() {});
});

$('#cancel-btn').on('click', function() {
    $('.modal').fadeOut("fast", function() {});
});

$('#cancel-btn-two').on('click', function() {
    $('.modal').fadeOut("fast", function() {});
});

$('.cancel-signup').on('click', function() {
    $('.modal').fadeOut("fast", function() {});
});

$('.box').on('click', function() {
    $('#stylistProfile').fadeIn("fast", function() {});
});

$('#exit').on('click', function() {
    $('.modal').fadeOut("fast", function() {});
});