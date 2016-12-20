$(function(){

    $.ajax({
        url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/user/touch.php",
        processData: false,
        contentType: false,
        type: "POST",
        success: function(response){
            console.log(response);
        }
    })

    $("#spotSearch").on("click", function(event){
        event.preventDefault();
        var searchData = new FormData();

        $mode = $("option:selected").val()
        $spotName = $("input[name=spotName]").val()
        $countryCode = $("input[name=countryCode]").val()

        searchData.append('mode', $mode);
        searchData.append('spotName', $spotName);
        searchData.append('countryCode', $countryCode);

        console.log($("option:selected").val())

        console.log($("input[name=spotName]").val())

        console.log($("input[name=countryCode]").val())

        spotMapCall(searchData);
    })

    var spotMapCall = function(searchData){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/time_capsule/get_spotmap.php",
            processData: false,
            contentType: false,
            type: "POST",
            data: searchData,
            success: function(response){
                console.log(response);
                // window.location.replace("http://localhost:8000/SDY_FE/index.html");
            }
        });
    }

})
