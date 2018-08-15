class HomePage {
    constructor(type){
        this.type = type;
        console.log("It's HomePage constructor");
    }

    loadPage(){
        console.log(`This is ${this.type}`);
    }      
}

module.exports = HomePage;

