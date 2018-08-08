class Vehicle {
    constructor(carModel,carYear,maxSpeed){
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayInfo(){
        console.log(`
        Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);
    }   

    static staticMethod(){
        console.log(`Call static method`);
    }
}

module.exports = Vehicle;
