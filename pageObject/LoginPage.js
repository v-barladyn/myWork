let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");

class LoginPage {
    constructor(){

        this.loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
        this.signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button"); 
        this.inputEmail = new WebTextInput(element(by.id('email')), "Input Email");
        this.inputPassword = new WebTextInput(element(by.id('userPassword')), "Input Password");
        this.checkName = new WebTextView(element(by.css(".user-name")), "checkName Label");
        let logoutDrop = new WebButton(element(by.css('span.caret')), 'Logout Dropdown');
        let logoutButton = new WebButton(element(by.css('a.dropdown-item>strong')),"Logout Button");


        this.pageLabel = 'Vasyl Barladyn';
        this.url = 'http://eds_university.eleks.com/login';
        this.email = "Vasiliy.barladyn@gmail.com";
        this.password = "qz7#(Jv_";
    }

    async logIn(){
        await browser.get(this.url);
        await this.loginButton.click();        
        await this.inputEmail.sendKeys(this.email);
        await this.inputPassword.sendKeys(this.password);
        await this.signInButton.click();
        let name = await this.checkName.getLabel();
        expect(name).toEqual(this.pageLabel);  
    }
    
    async logOut(){
         await logoutDrop.click();
         await logoutButton.click();
    }
}

module.exports = LoginPage;