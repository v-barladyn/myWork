
class Track extends Vehicle {
    constructor(carModel,carYear,maxSpeed){
        super(carModel,carYear,maxSpeed);
        this.type = "track";
    }

    transportPeple(){
        console.log(`I am starting transporting heavy container`);
    }

   
}