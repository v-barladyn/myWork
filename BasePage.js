const HomePage = require('./HomePage');

class LoginPage extends HomePage {
    constructor(type){
        super(type);
        console.log("It's LoginPage constructor");
    }

    login(username, pass){
        console.log(` This is LoginPage
       name ${username};
       pass ${pass};
        `);
    }      

   
}

module.exports = LoginPage;