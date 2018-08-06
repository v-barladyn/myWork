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

export default Animal;