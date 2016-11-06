$(function(){
    console.log("Loaded");
    // var email = "";
    // var emailConfirm = "";
    // var firstName = "";
    // var lastName = "";
    // var password = "";
    // var passwordConfirm = "";
    // var dob = "";
    // // var profilePic = "";


    function signUp(){
        console.log('Clicked');
        testCall();
    }

    function testCall(){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/modules/server/1.00/user/create",
            type: 'get',
            success: function(){
                console.log("made it");
            },
            error: function(){
                console.log("error");
            }
        })
    }

    // $("#signUp").on("click", signUp());


    // using XMLHttpRequest
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/modules/server/", true);
    // xhr.onload = function () {
    //     console.log(xhr.responseText);
    // };
    // xhr.send();

});
