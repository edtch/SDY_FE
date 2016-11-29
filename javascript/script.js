$(function(){

    var validate = function(formData){
        var validate_firstName = /^[A-Za-z\u2000-\u206F\u2E00-\u2E7F]{1,36}$/;
        var validate_lastName = /^[A-Za-z\u2000-\u206F\u2E00-\u2E7F]{1,36}$/;
        var validate_email = /^[A-Za-z0-9_\p{L}]+@([A-Za-z0-9_]+\.)+[A-Za-z0-9_]{1,16}$/
        var validate_password = /^[A-Za-z0-9_@+\-@#$!%\^&*(){}[\]]{8,36}$/;
        var validate_dateOfBirth = /^([1-9][0-9][0-9][0-9])-(((01-|03-|05-|07-|08-|10-|12-)(([0-2][0-9])|(3[01])))|((04-|06-|09-|11-)(([0-2][0-9])|(30)))|((02-)(([0-1][0-9])|(2[0-8]))))$/;
        var validate_dateOfBirth2 = /^([1-9][0-9][0-9][0-9])-(((01-|03-|05-|07-|08-|10-|12-)(([0-2][0-9])|(3[01])))|((04-|06-|09-|11-)(([0-2][0-9])|(30)))|((02-)([0-2][0-9])))$/;

        console.log(validate_firstName.test(formData.firstName));
        console.log(validate_lastName.test(formData.lastName));
        console.log(validate_email.test(formData.email));
        console.log(validate_password.test(formData.password));
        console.log(validate_dateOfBirth.test(formData.dateOfBirth));

    }

    $("form").on("submit",function(event){
        event.preventDefault();

        // These are the variables recieving the form inputs
        var $newAccountEmail = $("input[name=email]").val();
        var $newAccountFirstName = $("input[name=firstName]").val();
        var $newAccountLastName = $("input[name=lastName]").val();
        var $newAccountPassword = $("input[name=password]").val();
        var $newAccountConfirmPassword = $("input[name=confirmPassword]").val();
        var $newAccountDateOfBirth = $("input[name=dateOfBirth]").val();
        // var newAccountProfilePic = $("input[name=profilePic]").val();

        var formData = {
            "email": $newAccountEmail,
            "password": $newAccountPassword,
            "confirmPassword": $newAccountConfirmPassword,
            "firstName": $newAccountFirstName,
            "lastName": $newAccountLastName,
            "dateOfBirth": $newAccountDateOfBirth
        };
        validate(formData);
    });

});
