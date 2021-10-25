/* ----------------------------------------------------------------------------------------
onkeyup customernamename function
---------------------------------------------------------------------------------------- */
function cucustomerName() {
    let customername = document.querySelector('.customername');
    var messge = document.getElementsByClassName('lblcustomername');
    if (customername.value == "" || customername.value == null) {
        messge[0].innerHTML = "customername is required";
        messge[0].style.color = 'red';
        return false;
    } else {
        messge[0].innerHTML = "";
        return true;
    }
}
/* ----------------------------------------------------------------------------------------
onkeyup email function
---------------------------------------------------------------------------------------- */
function email() {
    let email = document.querySelector('.email').value;
    let messgae = document.getElementsByClassName('lblemail');
    if (email == "" || email == null) {
        // let regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
        messgae[0].innerHTML = "email is required";
        messgae[0].style.color = 'red';
        // regex.test(email);
        // if (!result) {
        //     messgae[0].innerHTML = "incorrect email";
        // }
        return false;
    } else {
        messgae[0].innerHTML = "";
        return true;
    }
}
/* ----------------------------------------------------------------------------------------
onkeyup username function
---------------------------------------------------------------------------------------- */
function SupUsername() {
    let supUserName = document.querySelector('#supUserName').value;
    let message = document.getElementsByClassName('lblSupusername');
    if (supUserName == "" || supUserName == null) {
        message[0].innerHTML = "username is rquired";
        message[0].style.color = 'red';

        if (SupUsername.length < 4) {
            message[0].innerHTML = "Atleast 4 characters are required";
            message[0].style.color = 'red';
            // return false;
        }
        return false;
    } else {
        message[0].innerHTML = "";
        return true;
    }
}

/* ----------------------------------------------------------------------------------------
onkeyup password function
---------------------------------------------------------------------------------------- */
function supPassword() {
    let supPassword = document.querySelector('.SupPassword').value;
    let message = document.getElementsByClassName('lblSuppassword');
    if (supPassword == "" || supPassword == null) {
        message[0].innerHTML = "password is required";
        message[0].style.color = 'red';
        return false;
    } else {
        message[0].innerHTML = "";
        return true;
    }
}
/* ----------------------------------------------------------------------------------------
onkeyup re-password function
---------------------------------------------------------------------------------------- */
function supRePassword() {
    let repassword = document.querySelector('#repassword').value;
    let supPassword = document.querySelector('.SupPassword').value;
    let message = document.getElementsByClassName('lblrepassword')
    if (repassword != supPassword) {
        message[0].innerHTML = "password does not match";
        message[0].style.color = 'red';
        return false;
    } else {
        message[0].innerHTML = "";
        return true;
    }
}
/* ----------------------------------------------------------------------------------------
sign-up button
---------------------------------------------------------------------------------------- */
document.querySelector('.signupbtn').addEventListener('click', function() {
    if (cucustomerName() == true && email() == true && SupUsername() == true && supPassword() == true && supRePassword() == true) {
        localStorage.removeItem('localusername1');
        localStorage.removeItem('localpassword1');
        let localsuername = document.querySelector('#supUserName').value;
        let localpassword = document.querySelector('.SupPassword').value;
        localStorage.setItem('localusername1', localsuername);
        localStorage.setItem('localpassword1', localpassword);
        // window.location.href = "signin.html";
        alert("Signed up Successfully");
        document.location.href = "signin.html";
    }

})