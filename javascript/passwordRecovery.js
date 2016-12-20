$(function(){

    $("#loginForm").on("submit",function(event){
        var $username = $("input[name=loginUsername]").val();
        var $password = $("input[name=loginPassword]").val();

        var loginData = new FormData();

        loginData.append("username", $username);
        loginData.append("passwd", $password);

        console.log(loginData.get('username'));
        console.log(loginData.get('passwd'));
        validateLogin(loginData);

    });

    $("#passwordRecoveryForm").on("submit",function(event){
        var $email = $("input[name=email]").val();

        var recoverData = new FormData();

        recoverData.append("email", $email);

        console.log(recoverData.get('email'));

        // recoverCall(recoverData);

    });

    //
    //Password Recovery call
    //

    // var recoverCall = function(recoverData){
    //     $.ajax({
    //         url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/user/login.php",
    //         processData: false,
    //         xhrFields: {withCredentials: true},
    //         contentType: false,
    //         type: "POST",
    //         data: loginData,
    //         success: function(response){
    //             console.log(response);
    //             window.location.replace("http://localhost:8000/SDY_FE/index.html");
    //         }
    //     });
    }

    //
    //  Validation for login
    //
    var validateLogin = function(loginData){
        var loginError = {};
        var validate_email = /^[A-Za-z0-9_\p{L}]+@([A-Za-z0-9_]+\.)+[A-Za-z0-9_]{1,16}$/
        var validate_password = /^[A-Za-z0-9_@+\-@#$!%\^&*(){}[\]]{8,36}$/;

        switch (false){
            case validate_email.test(loginData.get('username')):
            case validate_password.test(loginData.get('passwd')):
                loginError.account = "Username or password are incorrect! Please try again!"
                // $('#errorPassword').text(error.password);
                // $('#errorPassword').show()
                console.log(loginError.account);

                break
            default:
                console.log("Login is clear")
                // $(".errorSpan").hide();
                loginCall(loginData);

                break
        }
    }

    var loginCall = function(loginData){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/user/login.php",
            processData: false,
            xhrFields: {withCredentials: true},
            contentType: false,
            type: "POST",
            data: loginData,
            success: function(response){
                console.log(response);
                window.location.replace("http://localhost:8000/SDY_FE/index.html");
            }
        });
    }

});
