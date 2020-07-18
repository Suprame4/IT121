document.getElementById("calcFxn").disabled = true; 

var userBrand,
userMod,
speedInput,
timeInput; 


function userInputFxn(){
    userBrand = window.prompt("Enter your preferred brand of car");
    userMod = window.prompt("Enter your preferred model of car");

    mycar = new Model(userBrand, userMod);
    document.getElementById("demo").innerHTML = mycar.show();
    
    document.getElementById("userInput").disabled = true;
    document.getElementById("calcFxn").disabled = false; 
     
};


function calculationFxn(){
    while(true){
        distInput = window.prompt("Please enter the number of miles you travel each day in your vehicle below:  ")
        if (isNaN(distInput) === true){
            alert("Try again")
        } else {
            break; 
        }        
    
    };
    timeInput = window.prompt("Please enter the amount of time in hours for your travel below: ");

    mycar = new Model(userBrand, userMod, distInput, timeInput);
    document.getElementById("demo1").innerHTML = mycar.calculationFxn();
    
}

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod, dist, tim) {
      super(brand);
      this.model = mod;
      this.distance = dist;
      this.time = tim; 

    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
    calculationFxn(){
        var averSpeed = this.distance / this.time; 
        return 'Your average speed is: ' + averSpeed + " " + "miles per hour"; 

    }
  }
  
  //mycar = new Model(userBrand, userMod);
  //document.getElementById("demo").innerHTML = mycar.show();