const Vehicle = require('./Vehicle');

class Track extends Vehicle {
    constructor(carModel,carYear,maxSpeed){
        super(carModel,carYear,maxSpeed);
        this.type = "track";
    }

    displayInfo(){
        console.log(` This is track class
        Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);
    }      

    transportPeple(){
        console.log(`I am starting transporting heavy container`);
    }   
}

module.exports = Track;