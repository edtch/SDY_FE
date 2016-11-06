$(function(){
    console.log("Loaded");

    $("#signUp").on("click", function(){
        console.log('Clicked');
        testCall();
    })

    function testCall(){
        // jQuery preflight request
        $.ajax({
            type: "GET",
            headers: {"origin": "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/modules/server"},
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/modules/server/version/user/create"
        }).done(function (data) {
            console.log(made it);
            console.log(data);
        });
    };

    // using XMLHttpRequest
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/modules/server/", true);
    // xhr.onload = function () {
    //     console.log(xhr.responseText);
    // };
    // xhr.send();

    /* Open the sidenav */
    /* Set the width of the side navigation to 250px */
    function openNav(){
        document.getElementById("mySidenav").style.width = "250px";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav(){
        document.getElementById("mySidenav").style.width = "0";
    }

});
