var color = $('.color').hide();

$('#modal-btn-one').on('click', function() {
    $('#modal').fadeIn("fast", function() {});
});

$('.delete').on('click', function() {
    $('#modal').fadeOut("fast", function() {});
});

$('#modal-btn-two').on('click', function() {
    $('#modal-two').fadeIn("fast", function() {});
});

$('.delete').on('click', function() {
    $('#modal-two').fadeOut("fast", function() {});
});

$('.no-color').on('click', function() {
    $('.color').show();
    $('.no-color').hide();
});

$('.color').on('click', function() {
    $('.color').hide();
    $('.no-color').show();
});

var myLatlng = new google.maps.LatLng(-34.397, 150.644);
var mapOptions = {
    zoom: 8,
    center: myLatlng,
    mapTypeId: 'satellite'
};
var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);