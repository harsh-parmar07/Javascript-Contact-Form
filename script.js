var submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  console.log("clicked");
  console.log(e);

var errors = 0;

  
var lettersSpaces = new RegExp("^[A-Za-z\\s]*$");
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  var fname = document.getElementById("fname");
  var fnameError = document.getElementById("fname-error");
  if (!fname.value) {
    fnameError.innerHTML = "Please provide your first name";
    errors++;
  } else if (!lettersSpaces.test(fname.value)) {
    fnameError.innerHTML = "Please provide a valid name";
    errors++;
  } else {
    fnameError.innerHTML = "";
  }

  var lname = document.getElementById("lname");
  var lnameError = document.getElementById("lname-error");
  if (!lname.value) {
    lnameError.innerHTML = "Please provide your last name";
    errors++;
  } else if (!lettersSpaces.test(lname.value)) {
    lnameError.innerHTML = "Please provide a valid name";
    errors++;
  } else {
    lnameError.innerHTML = "";
  }


  var email = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  if (!email.value) {
    emailError.innerHTML = "Please provide your email";
    errors++;
  } else if (!emailPattern.test(email.value)) {
    emailError.innerHTML = "Please provide a valid email address";
    errors++;
  } else {
    emailError.innerHTML = "";
  }

  
  var messageField = document.getElementById("message");
  var messageError = document.getElementById("message-error");
  if (!messageField.value) {
    messageError.innerHTML = "Please enter your message";
    errors++;
  } else {
    messageError.innerHTML = "";
  }

  
  if (errors === 0) {
    var message = document.getElementById("message-box");
    message.innerHTML = "Thank you!";
  }else{
    e.preventDefault();
  }
});