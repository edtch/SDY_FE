$(function(){


    $("form").on("submit",function(event){
        event.preventDefault();

        // These are the variables recieving the form inputs
        var $newAccountEmail = $("input[name=email]").val();
        var $newAccountFirstName = $("input[name=firstName]").val();
        var $newAccountLastName = $("input[name=lastName]").val();
        var $newAccountPassword = $("input[name=password]").val();
        var $newAccountConfirmPassword = $("input[name=confirmPassword]").val();
        var $newAccountDateOfBirth = $("input[name=dateOfBirth]").val();
        // console.log($("input[name=privacy-checkbox]").val());
        // var newAccountProfilePic = $("input[name=profilePic]").val();

        var formData = {
            "email": $newAccountEmail,
            "password": $newAccountPassword,
            "confirmPassword": $newAccountConfirmPassword,
            "firstName": $newAccountFirstName,
            "lastName": $newAccountLastName,
            "dateOfBirth": $newAccountDateOfBirth
        };

        if ($("input[name=privacy-checkbox]").is(":checked")){

            validate(formData);

        }else{
            console.log("404 bro!")
        }

    });

    var validate = function(formData, response){
        var error = {};

        var validate_firstName = /^[A-Za-z\p{L}]{1,36}$/;
        var validate_lastName = /^[A-Za-z\p{L}]{1,36}$/;
        var validate_email = /^[A-Za-z0-9_\p{L}]+@([A-Za-z0-9_]+\.)+[A-Za-z0-9_]{1,16}$/
        var validate_password = /^[A-Za-z0-9_@+\-@#$!%\^&*(){}[\]]{8,36}$/;
        var validate_dateOfBirth = /^([1-9][0-9][0-9][0-9])-(((01-|03-|05-|07-|08-|10-|12-)(([0-2][0-9])|(3[01])))|((04-|06-|09-|11-)(([0-2][0-9])|(30)))|((02-)(([0-1][0-9])|(2[0-8]))))$/;
        var validate_dateOfBirth2 = /^([1-9][0-9][0-9][0-9])-(((01-|03-|05-|07-|08-|10-|12-)(([0-2][0-9])|(3[01])))|((04-|06-|09-|11-)(([0-2][0-9])|(30)))|((02-)([0-2][0-9])))$/;

        switch (false) {
            case validate_firstName.test(formData.firstName):
                error.firstName = "Invalid first name!"
                // $('#errorFirstName').text(error.firstName);
                $('#errorFirstName').show();
                console.log(error.firstName);

            case validate_lastName.test(formData.lastName):
                error.lastName = "Invalid last name!"
                // $('#errorLastName').text(error.lastName);
                $('#errorLastName').show()
                console.log(error.lastName);

            case validate_email.test(formData.email):
                error.lastName = "Invalid email!"
                // $('#errorLastName').text(error.lastName);
                $('#errorLastName').show()
                console.log(error.lastName);

            case validate_password.test(formData.password):
                error.password = "Invalid password!"
                // $('#errorPassword').text(error.password);
                $('#errorPassword').show()
                console.log(error.password);

            case (validate_password.test(formData.confirmPassword) && (formData.confirmPassword == formData.password)):
                error.confirmPassword = "Password does not match or is invalid!"
                // $('#errorConfirmPassword').text(error.confirmPassword);
                $('#errorConfirmPassword').show();
                console.log(error.confirmPassword);

            case validate_dateOfBirth.test(formData.dateOfBirth):
                error.dateOfBirth = "Invalid date of Birth!"
                // $('#errorDateOfBirth').text(error.dateOfBirth);
                $('#errorDateOfBirth').show();
                console.log(error.dateOfBirth);

                break
            default:
                console.log("Form is valid like salad")
                $(".errorSpan").hide();
                // registrationCall(formData);

                break
        }



    }

    var registrationCall = function(formData){
        $.ajax({
            url: "http://www.nullster.com/ssds/19EA4B39-2221-45CD-A954-2281000AEDBE0EF/ept/redpill/modules/server/user/create",
            type: 'POST',
            data: formData,
            dataType: 'json',
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
