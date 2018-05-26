function validate() {

    var email = document.getElementById("em").value;  
    var password = document.getElementById("ps").value;
    emailvalidation(email);
    passvalidation(password);
    localstore(email,password);
}

function emailvalidation(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)) {
        return true;
    }
    else if(email == "") {
        alert("Email cannot be blank!")
        return false;
    }
    else{
        alert("Enter a valid email address!");
        return false;
    }
}

function passvalidation(password) {
    let passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/;
    if(password.match(passformat)) {
        window.location.href = "file:///home/aiesys/Desktop/Project/login_app/login.html";
        return true;
    }
    else if(password == "") {
        alert("Password cannot be blank!!")
        return false;
    }
    else {
        alert("Password should contain minimum 1 alphabet, 1 number, 1 special character and total 8-16 characters!!")
        return false;
    }
}

function localstore(email,password) {

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}

function hide_fun() {
    var x = document.getElementById("ps");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}