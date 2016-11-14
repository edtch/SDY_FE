$(function(){

    /* Open the sidenav */
    /* Set the width of the side navigation to 250px */
    // function openNav(){
    //     document.getElementById("mySidenav").style.width = "250px";
    // }
    //
    // /* Set the width of the side navigation to 0 */
    // function closeNav(){
    //     document.getElementById("mySidenav").style.width = "0";
    // }

    $('#Btn').on('click', function(){
        getData();
    })

    var getData = function(){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/modules/server/user/login",
            type: 'get',
            // dataType: 'jsonp',
            success: function(data){
                console.log(data)
                console.log('We made it!')
            },
            error: console.log("There was an error"),
        })
    }

});
