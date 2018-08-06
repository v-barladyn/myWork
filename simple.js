class Vehicle{
    constructor(carModel,carYear,maxSpeed){
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayInfo(){
        console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);
    }

    static staticMethod(){
        console.log(`Call static method`);
    }

}

class Car extends Vehicle {
    constructor(carModel,carYear,maxSpeed){
        super(carModel,carYear,maxSpeed);
        this.type = "car";
    }

    displayInfo(){
       return super.displayInfo();
    }

    transportPeple(){
        console.log(`I am starting transporting people`);
    }
}


class Track extends Vehicle {
    constructor(carModel,carYear,maxSpeed){
        super(carModel,carYear,maxSpeed);
        this.type = "track";
    }

    transportPeple(){
        console.log(`I am starting transporting heavy container`);
    }

   
}

let volvo = new Car('243', 2002, 210);
//console.log(volvo);
//volvo.displayInfo();
volvo.transportPeple();
Vehicle.staticMethod();
//volvo.staticMethod();