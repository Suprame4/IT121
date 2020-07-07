function myFunction() {
    var userAge = document.getElementById("id1");
    if (!userAge.checkValidity()) {
      document.getElementById("val").innerHTML = userAge.validationMessage;
    } else {
      document.getElementById("val").innerHTML = "You are of age to enjoy this game!";
    } 
  } 