$(function(){


    $("#registrationForm").submit(function(event){
        event.preventDefault();
        // These are the variables recieving the form inputs
        var $newAccountEmail = $("input[name=email]").val();
        var $newAccountConfirmEmail = $("input[name=emailConfirm]").val();
        var $newAccountFirstName = $("input[name=firstName]").val();
        var $newAccountLastName = $("input[name=lastName]").val();
        var $newAccountPassword = $("input[name=password]").val();
        var $newAccountConfirmPassword = $("input[name=confirmPassword]").val();
        // var $newAccountDateOfBirth = $("input[name=dateOfBirth]").val();
        // console.log($(registrationForm).serialize());
        var newAccountProfilePic = $("input[name=profilePic]").val();

        var formData = {
            "newAccountEmail": ($("input[name=email]").val()),
            "newAccountEmailConfirm": ($("input[name=emailConfirm]").val()),
            "newAccountFirstName": ($("input[name=firstName]").val()),
            "newAccountLastName": ($("input[name=lastName]").val()),
            "newAccountPassword": ($("input[name=password]").val()),
            "newAccountPasswordConfirm": ($("input[name=confirmPassword]").val()),
            // "newAccountDOB",(("input[name=dateOfBirth]").val())
            "newAccountProfilePicture": ($("input[type=file]").get(0).files[0])
        }



        // var formData = new FormData($(this)[1]);
        // formData.append("newAccountEmail", $("input[name=email]").val());
        // formData.append("newAccountEmailConfirm", $("input[name=emailConfirm]").val());
        // formData.append("newAccountFirstName", $("input[name=firstName]").val());
        // formData.append("newAccountLastName", $("input[name=lastName]").val());
        // formData.append("newAccountPassword", $("input[name=password]").val());
        // formData.append("newAccountPasswordConfirm", $("input[name=confirmPassword]").val());
        // // formData.append("newAccountDOB",($("input[name=dateOfBirth]").val()))
        // formData.append("newAccountProfilePicture", $("input[type=file]").get(0).files[0])

        if ($("input[name=privacy-checkbox]").is(":checked")){

            console.log(formData)
            // validate(formData)
            registrationCall(formData);
        }else{
        }

    });

    var validate = function(formData){
        var error = {};

        var validate_firstName = /^[A-Za-z\p{L}]{1,36}$/;
        var validate_lastName = /^[A-Za-z\p{L}]{1,36}$/;
        var validate_email = /^[A-Za-z0-9_\p{L}]+@([A-Za-z0-9_]+\.)+[A-Za-z0-9_]{1,16}$/
        var validate_password = /^[A-Za-z0-9_@+\-@#$!%\^&*(){}[\]]{8,36}$/;
        var email_match = "";
        var password_match = "";
        // var validate_dateOfBirth = /^([1-9][0-9][0-9][0-9])-(((01-|03-|05-|07-|08-|10-|12-)(([0-2][0-9])|(3[01])))|((04-|06-|09-|11-)(([0-2][0-9])|(30)))|((02-)(([0-1][0-9])|(2[0-8]))))$/;
        // var validate_dateOfBirth2 = /^([1-9][0-9][0-9][0-9])-(((01-|03-|05-|07-|08-|10-|12-)(([0-2][0-9])|(3[01])))|((04-|06-|09-|11-)(([0-2][0-9])|(30)))|((02-)([0-2][0-9])))$/;

            switch (false) {
                case (key == "newAccountFirstName" && validate_firstName.test(formData)):
                    error.firstName = "Invalid first name!"
                    // $('#errorFirstName').text(error.firstName);
                    $('#errorFirstName').show();
                    console.log(error.firstName);

                    break
                case (key == "newAccountLastName" && validate_lastName.test(formData)):
                    error.lastName = "Invalid last name!"
                    // $('#errorLastName').text(error.lastName);
                    $('#errorLastName').show()
                    console.log(error.lastName);

                    break
                case (key == "newAccountEmail" && validate_email.test(formData)):
                    error.lastName = "Invalid email!"
                    // $('#errorLastName').text(error.lastName);
                    $('#errorLastName').show()
                    email_match = formData
                    console.log(error.lastName);

                    break
                case (key == "newAccountEmailConfirm" && validate_email.test(formData) && formData == email_match):
                    error.lastName = "Invalid email or Passwords do not match!"
                    // $('#errorLastName').text(error.lastName);
                    $('#errorLastName').show()
                    console.log(error.lastName);

                    break
                case (key == "newAccountPassword" && validate_password.test(formData)):
                    error.password = "Invalid password!"
                    password_match = formData;
                    // $('#errorPassword').text(error.password);
                    $('#errorPassword').show()
                    console.log(error.password);

                    break
                case (validate_password.test(formData) && (key == "newAccountPasswordConfirm") && formData == password_match ):
                    error.confirmPassword = "Password does not match or is invalid!"
                    // $('#errorConfirmPassword').text(error.confirmPassword);
                    $('#errorConfirmPassword').show();
                    console.log(error.confirmPassword);

                    break
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

    };

    var registrationCall = function(formData){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/user/create.php",
            type: 'POST',
            // processData: false,
            // contentType: false,
            data: formData,
            success: function(response){
                console.log(response)
            },
            error: function(response){
                console.log(response);
                console.log("There was an error submitting comment");
            }
        })
    }

});
