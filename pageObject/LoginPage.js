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
    get checkCurrentUrl(){
        return 'http://eds_university.eleks.com/login';
    }

    get errorLoginwithWrongCredentials(){
        return element(by.xpath("//span[contains(text(),'Login or password is not correct')]"))
    }
    

    async opensSite(){
        await browser.get(this.url);
        expect(await browser.getCurrentUrl()).toEqual(this.checkCurrentUrl);
    }

    async logIn(){
        await this.opensSite();
        await this.loginButton.click();        
        await this.inputEmail.sendKeys(this.email);
        await this.inputPassword.sendKeys(this.password);
        await this.signInButton.click();
        expect(await this.checkNameAfterLogIn.getLabel()).toEqual(this.pageLabel);  
    }
    
    async logOut(){        
        await this.logOutButton.click();        
        await this.signOut.click();
        //await browser.sleep(2000);
        await browser.wait(protractor.ExpectedConditions.presenceOf(this.loginButton), 5000, ' 1111111111111 Confirmation Of Deliting Element taking too long to appear in the DOM');

    }
}

export default new LoginPage();