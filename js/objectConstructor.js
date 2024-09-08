console.log("Welcome to Object and Constructor");

// let obj = {
//     name : "Maruti Alto",
//     topSpeed: 180,
//     run: function() {
//         console.log("Car is Running");
//     }
// }
// console.log(obj);

// function GenCar(giveName, giveSpeed){
//     this.name = giveName;
//     this.giveSpeed = giveSpeed;
//     this.run = function(){
//         console.log(this.name, "is runnig");
//     }
// }

// car1 = new GenCar("Nissan", 180);
// console.log(car1);

/*-----OBJECTS----*/
let car = {
    name: "Amit Vishwakarma",
    speed: 180,
    run: function () {
        console.log("your car is running");
    }
}

/*-----CONSTRUCTOR----*/
function GenCar(givenName,givenName) {
    this.name = givenName,
    this.speed = givenName,
    this.run =  function(){
        console.log(this.name, "Is Running");
    }
}

car1 = new GenCar("ROYALS ROYAS", 800);
console.log(car1)