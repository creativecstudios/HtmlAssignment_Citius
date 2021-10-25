/* ----------------------------------------------------------------------------------------
onkeyup username function
---------------------------------------------------------------------------------------- */
// document.getElementById('username').onkeyup = function() {
//         let username = document.querySelector('#username');
//         if (username.value == "" || username.value == null) {
//             document.querySelector('.lblusername').innerHTML = "username is required";
//             var message = document.getElementsByClassName('lblusername');
//             message[0].style.color = "red";
//             return false;
//         } else {
//             document.querySelector('.lblusername').innerHTML = "";
//             return true;
//         }
//     }

//////////////////////////////////////////////////////////////////////////////////////////////

/* ----------------------------------------------------------------------------------------
    onkeyup password function 
// ---------------------------------------------------------------------------------------- */
// function passw() {
//     let password = document.querySelector('#password');
//     if (password.value == null || password.value == "") {
//         document.querySelector('.lblpassword').innerHTML = "password is required";
//         var message = document.getElementsByClassName('lblpassword');
//         message[0].style.color = "red";
//         return false;
//     } else {
//         document.querySelector('.lblpassword').innerHTML = "";
//         return true;
//     }
// }

/* ----------------------------------------------------------------------------------------
sign-in button
---------------------------------------------------------------------------------------- */
// document.querySelector('.signinbtn').addEventListener('click', function() {
//     let password = document.querySelector("#password").value;
//     let username = document.querySelector("#username").value;
//     let localsuername = localStorage.getItem("localusername1");
//     let localpassword = localStorage.getItem("localpassword1");
//     if (password == localpassword && username == localsuername) {
//         document.querySelector(".error").textContent = "";
//         // alert("Signed successfully");
//         window.location.href = 'Shopping.html';

//     } else {
//         // alert("d")
//         document.querySelector(".error").textContent = "username or password doesn't match perfectly";
//         var message = document.getElementsByClassName("error");
//         message[0].style.color = "red";
//     }

// })