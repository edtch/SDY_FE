$(function(){

    $("#loginForm").on("submit",function(event){
        event.preventDefault()
        var $username = $("input[name=loginUsername]").val();
        var $password = $("input[name=loginPassword]").val();

        var loginData = new FormData();

        loginData.append("username", $username);
        loginData.append("passwd", $password);

        console.log(loginData.get('username'));
        console.log(loginData.get('passwd'));
        validateLogin(loginData);

    });

    //
    // This the Registration function activated on submit
    //
    $("#submit").on("click",function(event){
        event.preventDefault()

        // These are the variables recieving the form inputs
        var $newAccountEmail = $("input[name=newAccountEmail]").val();
        var $newAccountEmailConfirm = $("input[name=newAccountEmailConfirm]").val();
        var $newAccountFirstName = $("input[name=newAccountFirstName]").val();
        var $newAccountLastName = $("input[name=newAccountLastName]").val();
        var $newAccountPassword = $("input[name=newAccountPassword]").val();
        var $newAccountPasswordConfirm = $("input[name=newAccountPasswordConfirm]").val();
        // var $newAccountDOB = $("input[name=dateOfBirth]").val();
        // var $newAccountProfilePicture = $("input[name=newAccountProfilePicture]").val();

        var formData = new FormData();

        formData.append("newAccountEmail", $newAccountEmail);
        formData.append("newAccountEmailConfirm", $newAccountEmailConfirm);
        formData.append("newAccountFirstName", $newAccountFirstName);
        formData.append("newAccountLastName", $newAccountLastName);
        formData.append("newAccountPassword", $newAccountPassword);
        formData.append("newAccountPasswordConfirm", $newAccountPasswordConfirm);
        // formData.append("newAccountDOB", $newAccountDOB);
        // formData.append("newAccountProfilePicture", $newAccountProfilePicture);


        if ($("input[name=privacy-checkbox]").is(":checked")){
            validateRegistration(formData);

        }else{
            console.log("404 bro!")
        }

    });

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

    //
    //  Validation for registration
    //
    var validateRegistration = function(formData){
        var error = {};

        var validate_firstName = /^[A-Za-z\p{L}]{1,36}$/;
        var validate_lastName = /^[A-Za-z\p{L}]{1,36}$/;
        var validate_email = /^[A-Za-z0-9_\p{L}]+@([A-Za-z0-9_]+\.)+[A-Za-z0-9_]{1,16}$/
        var validate_password = /^[A-Za-z0-9_@+\-@#$!%\^&*(){}[\]]{8,36}$/;
        var validate_dateOfBirth = /^([1-9][0-9][0-9][0-9])-(((01-|03-|05-|07-|08-|10-|12-)(([0-2][0-9])|(3[01])))|((04-|06-|09-|11-)(([0-2][0-9])|(30)))|((02-)(([0-1][0-9])|(2[0-8]))))$/;
        // var validate_dateOfBirth2 = /^([1-9][0-9][0-9][0-9])-(((01-|03-|05-|07-|08-|10-|12-)(([0-2][0-9])|(3[01])))|((04-|06-|09-|11-)(([0-2][0-9])|(30)))|((02-)([0-2][0-9])))$/;

        switch (false) {
            case validate_firstName.test(formData.get('newAccountFirstName')):
                error.firstName = "Invalid first name!"
                // $('#errorFirstName').text(error.firstName);
                $('#errorFirstName').show();
                console.log(error.firstName);

            case validate_lastName.test(formData.get('newAccountLastName')):
                error.lastName = "Invalid last name!"
                // $('#errorLastName').text(error.lastName);
                $('#errorLastName').show()
                console.log(error.lastName);

            case validate_email.test(formData.get('newAccountEmail')):
                error.email = "Invalid email!"
                // $('#errorLastName').text(error.lastName);
                $('#errorEmail').show()
                console.log(error.email);

            case validate_password.test(formData.get('newAccountPassword')):
                error.password = "Invalid password!"
                // $('#errorPassword').text(error.password);
                $('#errorPassword').show()
                console.log(error.password);

            case (validate_password.test(formData.get('newAccountPasswordConfirm')) && (formData.get('newAccountPassword') == formData.get('newAccountPasswordConfirm'))):
                error.confirmPassword = "Password does not match or is invalid!"
                // $('#errorConfirmPassword').text(error.confirmPassword);
                $('#errorConfirmPassword').show();
                console.log(error.confirmPassword);
                break;

            // case validate_dateOfBirth.test(formData.dateOfBirth):
            //     error.dateOfBirth = "Invalid date of Birth!"
            //     // $('#errorDateOfBirth').text(error.dateOfBirth);
            //     $('#errorDateOfBirth').show();
            //     console.log(error.dateOfBirth);
            //
            //     break
            default:
                console.log("Form is valid like salad")
                $(".errorSpan").hide();
                registrationCall(formData);

                break
        }
    }

    var loginCall = function(loginData){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/user/login.php",
            type: "POST",
            data: loginData,
            // crossDomain: true,
            processData: false,
            contentType: false,
            success: function(response){
                console.log(response);
                window.location.replace("http://localhost:8000/SDY_FE/index.html");
            }
        });
    }

    //
    // Ajax post to Shready API registration (...user/create.php)
    //
    var registrationCall = function(formData){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/user/create.php",
            processData: false,
            contentType: false,
            type: 'POST',
            data: formData,
            success: function(response){
                console.log(response)
                window.location.replace("http://localhost:8000/SDY_FE/index.html");
            }
        });
    }

});
