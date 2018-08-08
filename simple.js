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
       console.log('Its a car class');
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

    displayInfo(){
        console.log(` this is track class
        Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);
    }  

    transportPeple(){
        console.log(`I am starting transporting heavy container`);
    }

   
}


// Call staticMethod from Vehicle class  
Vehicle.staticMethod();

// Create obj car and call displayInfo method
let volvo = new Car('Volvo', 2002, 210);
volvo.displayInfo(); // Overriding and call method from parent clas


// Create obj car and call  methods
let track = new Track('Man', 2011, 99);
track.displayInfo(); //Overriding parent method
track.transportPeple();

