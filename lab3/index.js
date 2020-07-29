//Adding event listeners for 3 of the 5 buttons displayed
document.getElementById("addEventListenerBtm").addEventListener("click", eventHandlerFxn);

document.getElementById("removeEventListenerBtm").addEventListener("click", removeEventListenerFxn);

document.getElementById("stylePara").addEventListener("click", styleParaFxn); 

//Disable the disable event button 
document.getElementById("removeEventListenerBtm").disabled = true; 



function eventHandlerFxn(){
    document.getElementById("demo").innerHTML = Date(); 

    //Add event listeners for the two button GUI controls
    //the first button
    document.getElementById("nonBtmGC1").addEventListener("click", addEntLtnFxn);

    //the second button 
    document.getElementById("nonBtmGC2").addEventListener("click", addEntLtnFxn2);

    document.getElementById("addEventListenerBtm").disabled = true;
    document.getElementById("removeEventListenerBtm").disabled = false; 
};

function addEntLtnFxn(){
    console.log("Btm3: Click event registered");
}

function addEntLtnFxn2(){
    console.log("Btm4: Click event registered"); 
}


function removeEventListenerFxn(){

    document.getElementById("nonBtmGC1").removeEventListener("click", addEntLtnFxn);
    document.getElementById("nonBtmGC2").removeEventListener("click", addEntLtnFxn2);

    document.getElementById("addEventListenerBtm").disabled = false;
    document.getElementById("removeEventListenerBtm").disabled = true; 
};

function styleParaFxn(){

    //Creating a while with conditional statements to evaluate user input 
    while(true){

        var userInput = window.prompt("Enter 1 for Traverse bt DOM collection or 2 for by NodeList");
        userInput = Number(userInput);
    
    //Check whether userInput is either number 1 or 2
        if( userInput == 1 ){
            //DOM collection
            var myCollection = document.getElementsByTagName("p");
            var i; 
                for (i = 0; i < myCollection.length; i++){
                    myCollection[i].style.color = "red"; 
            }
            break;

        }else if (userInput == 2){
            //node list 
            var myNodeList = document.querySelectorAll("p");
            var i;
            //change color is not working for this section
            for (i < 0; i < myNodeList.length; i++){
                myNodeList[i].style.color = "blue"; 
            }
            
            break;
        } else if (userInput == "" || userInput == null){
            
            break; 
        }else {
            alert("Error: Try again!");
        }
    }
};

