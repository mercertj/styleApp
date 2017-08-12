$(document).ready(function() {
    function setUser () {
        //change links to profile link, with name
        //add signout link
    }

    function checkAuth () {
       $.get("/api/auth/check", function(data) {
            console.log(data ? 'user: ' + data : 'No user logged in.')
            if (data) {
                setUser()
            }
       }) 
    }

    $(document).on("click", "#search-all", function(){
        var svcSearch = $('#service-search').val().replace(' ', '+');
        var addySearch = $('#addyinput').val().replace(/ /g, '+');
        window.location.href = "../list/?service=" + svcSearch +"&address=" + addySearch+"/"
    });

    $(document).on("click", "#submit-login", function () { 
        $.post("/api/auth/login", {
            username : $('#login-username').val().trim(),
            password : $('#login-password').val().trim()
        }, function () {
            checkAuth()
        })

    });
    
    checkAuth()

});