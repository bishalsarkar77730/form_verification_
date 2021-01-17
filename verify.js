function validate() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var re_password = document.getElementById("che_password").value;
    var text;
    if(name.length < 3){
        text =  "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(number) || number.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(password.length < 8){
        text = "Please Enter More then 8 Character";
        error_message.innerHTML = text;
        return false;
    }
    if(password !== re_password){
        text = "Password Does'nt Match";
        error_message.innerHTML = text;
        return false;
    }
    if(password == re_password){
        error_message.style.background = "green";
    }
    alert("Form Submitted Successfully :)");
    return true;
}