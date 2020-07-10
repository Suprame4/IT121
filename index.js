const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");

const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {

    let messages = []; 
    if (fname.value === "" || fname.value == null){
        messages.push("ERROR: First name is required");
    }

    if (lname.value === "" || lname.value == null){
        messages.push("ERROR: Last name is required");
    }

    if (email.value === "" || email.value == null){
        messages.push("ERROR: Email is required");
    }

    if (password.value === "" || password.value == null){
        messages.push("ERROR: Password is required");
    }

    if (password.value.length <= 6){
        messages.push("ERROR: Password must be longer than 6 characters")
    }

    if(password.value.length >= 20){
        messages.push("ERROR: Password must be shorter than 6 characters")
    }

    if (password.value === "password"){
        messages.push("ERROR: Password cannot be \"password\"")

    }
      
    if (password.value !== password1.value){
        messages.push("ERROR: Passwords do not match")
    }

    
    if(messages.length > 0){

    e.preventDefault();
    errorElement.innerText = messages.join(",\n ");

    }
})



