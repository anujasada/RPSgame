function login_fun() {
    let new_email = document.getElementById("em").value;  
    let new_pass = document.getElementById("ps").value; 
    let loc_email = localStorage.getItem("email");
    let loc_pass = localStorage.getItem("password");
    if(new_email == loc_email && new_pass == loc_pass) {
        window.location.href = "file:///home/aiesys/Desktop/Project/login_app/dashboard.html";
        return true;
    } else {
        alert ("Invalid email or password!!");
        return false;
    }
}

function hide_fun() {
    var x = document.getElementById("ps");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

