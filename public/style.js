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