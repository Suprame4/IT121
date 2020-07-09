const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {

    let messages = []; 
    if (fname.value === "" || name.value == null){
        messages.push("Error: First name is required");
    }

    if(messages.length > 0){

    e.preventDefault();
    errorElement.innerText = messages.join(", ");

    }
})


