const HomePage = require('./HomePage');

class BasePage extends HomePage {
    constructor(type){
        super(type);
        console.log("It's BasePage constructor");
    }    

   
}

module.exports = BasePage;