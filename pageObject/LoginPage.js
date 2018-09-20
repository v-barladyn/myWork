import WebButton from "../controls/web.button";
import WebTextInput from "../controls/web.input";
import WebTextView from "../controls/web.label";
import Utils from "./Utils";
browser.ignoreSynchronization = true;


class LoginPage {
    constructor(){ 
    }

    get loginButton(){
        return new WebButton(element(by.css('.login-button')), "Login Button");
    }

    get signInButton(){
        return new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button"); 
    }

    get inputEmail(){
        return new WebTextInput(element(by.id('email')), "Input Email");        
    }

    get inputPassword(){
        return new WebTextInput(element(by.id('userPassword')), "Input Password");
    }

    get checkNameAfterLogIn(){
        return new WebTextView(element(by.css(".user-name")), "checkNameAfterLogIn Label");
    }

    get logOutButton(){
        return new WebTextView(element(by.xpath("//ul/li/a[@id='single-button']/span")), 'Logout Button');
    }

    get signOut(){
        return new WebTextView(element(by.xpath("//a[@class='dropdown-item']/strong")),"SignOut Button");
    }  

    get pageLabel(){
        return 'Vasyl Barladyn';
    }
    
    get url(){
        return 'http://eds_university.eleks.com/login';
    }

    get email(){
        return "Vasiliy.barladyn@gmail.com";
    }

    get password(){
        return 'qz7#(Jv_';
    }
    get wrongPassword(){
        return 'qz7#(Jv';
    }

    get blanckPassword(){
        return '';
    }
   
    get errorLoginwithWrongCredentials(){
        return element(by.xpath("//span[contains(text(),'Login or password is not correct')]"))
    }

    get errorTextAfterwongLogin(){
        return 'Login or password is not correct';
    }

    get checkLogInButton(){
       return  element(by.css('.login-button'));
    }
     
    // open Current site @urr - site to open

    async opensSite(url){
        await allure.createStep("Open site",  async () => {
            await browser.get(url);
            expect(await browser.getCurrentUrl()).toEqual(url);
        })();
    }
    

    // Open login form

    async openLoginForm(){
        await allure.createStep("Open login form",   async () => {
            await this.loginButton.click();
        })();
    }

    //Login functiion: @email, @password

    async logIn(email, password){          
        
        await allure.createStep("Input email end password",   async () => {        
            await this.inputEmail.sendKeys(email);
            await this.inputPassword.sendKeys(password);
        })();

        await allure.createStep("Click sign in button",   async () => {        
            await this.signInButton.click();           
        })();
 
    }
    
    //Log out function

    async logOut(){
        await allure.createStep("Click log out button",   async () => {        
            await this.logOutButton.click();  
        })();

        await allure.createStep("Click sign out button",   async () => {     
            await this.signOut.click();       
            await Utils.presenceOfElement(this.checkLogInButton);
        })();
    }
}

export default new LoginPage();