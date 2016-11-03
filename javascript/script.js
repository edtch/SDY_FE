$(function(){
    console.log("Loaded");

    function testCall(){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/modules/server",
            method: "GET",
            success: function(data){
                let results = data;
                console.log(results);
            }
        });
    };

    // testCall();

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
