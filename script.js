function validateForm() {
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var course = document.getElementById("course").value;
    var error = document.getElementById("error");

    if (name == "" || dob == "" || email == "" || phone == "" || course == "") {
        error.innerHTML = "Please fill in all fields.";
        return false;
    }

    if (email.indexOf("@") == -1) {
        error.innerHTML = "Please enter a valid email address.";
        return false;
    }

    error.innerHTML = "";
    alert("Registration successful!");
    return true;
}
