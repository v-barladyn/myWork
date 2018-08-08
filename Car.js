const Vehicle = require('./Vehicle');

class Car extends Vehicle {
    constructor(carModel,carYear,maxSpeed){
        super(carModel,carYear,maxSpeed);
        this.type = "car";
    }

    displayInfo(){
        console.log('Its a car class');
        return super.displayInfo();
    }  

    transportPeple(){
        console.log(`I am starting transporting people`);
    }
}

module.exports = Car;