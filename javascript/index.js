$(function(){

    $.ajax({
        url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/user/touch.php",
        type: "POST",
        // xhrFields: { withCredentials: true },
        // crossDomain: true,
        processData: false,
        contentType: false,
        success: function(response){
            console .log(response);
        }
    })

    $("#logout").on('click', function(){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/user/logout.php",
            // processData: false,
            // xhrFields: {withCredentials: true},
            // contentType: false,
            type: "POST",
            success: function(response){
                console.log(response);
                location.href="http://localhost:8000/SDY_FE/register.html";
            }
        })
    });
});
