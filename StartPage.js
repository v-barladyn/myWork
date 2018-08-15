const BasePage = require('./BasePage');

class StartPage extends BasePage {
    constructor(type, post){
        super(type);
        this.post = post;
        console.log("It's StartPage constructor");
    }    


    displayInfo(){
        console.log(`This is ${this.type} page;
        You can post some text ${this.post};        
        `);
    }

    loadPage(){
        console.log('some text');
        super.loadPage();
    }
}

module.exports = StartPage;


let a = new StartPage('start', 'some post body');
a.displayInfo();
a.loadPage();