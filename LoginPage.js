//const HomePage = require('./HomePage');
import HomePage from './HomePage.js';
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

//module.exports = LoginPage;
export default LoginPage;

 let y = new LoginPage('login');
 console.log(y);

 y.login('aaaaa','sssss');
 y.loadPage();
