import WebButton from "../controls/web.button";
import WebTextInput from "../controls/web.input";
import WebTextView from "../controls/web.label";
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
        return new WebTextView(element(by.xpath("//ul/li/a[@id='single-button']")), 'Logout Button');
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
   
    get errorLoginwithWrongCredentials(){
        return element(by.xpath("//span[contains(text(),'Login or password is not correct')]"))
    }

    get checkLogInButton(){
       return  element(by.css('.login-button'));
    }
    

    async opensSite(){
        await allure.createStep("Open site",  async () => {
            await browser.get(this.url);
            expect(await browser.getCurrentUrl()).toEqual(this.url);
        })();
    }

    async logIn(){
        await this.opensSite();

        await allure.createStep("Click log in button",   async () => {
            await this.loginButton.click();
        })();
        
        await allure.createStep("Input email end password",   async () => {        
            await this.inputEmail.sendKeys(this.email);
            await this.inputPassword.sendKeys(this.password);
        })();

        await allure.createStep("Click sign in button",   async () => {        
            await this.signInButton.click();
            expect(await this.checkNameAfterLogIn.getLabel()).toEqual(this.pageLabel); 
        })();
 
    }
    
    async logOut(){
        await allure.createStep("Click log out button",   async () => {        
            await this.logOutButton.click();  
        })();

        await allure.createStep("Click sign out button",   async () => {     
            await this.signOut.click();       
            await browser.wait(protractor.ExpectedConditions.presenceOf(this.checkLogInButton), 5000, 'Wait for element login button');
        })();
    }
}

export default new LoginPage();