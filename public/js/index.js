$(document).ready(function() {
    $(document).on("click", "#search-all", searchAll);

    function serviceSearch() {
        return $('#service-search').val().replace(' ', '+');
    }

    function distanceSearch() {
        return $('#distance').val()
    }

    function searchAll() { 
    	var svcSearch = serviceSearch();
    	var distSearch = distanceSearch();
        window.location.href = "../list/?service=" + svcSearch +"&range=" + distSearch+"/"
    }

});