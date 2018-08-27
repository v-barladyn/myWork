let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");

xdescribe('Login Functionality', () => {

    let loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
    let signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button"); 
    let inputEmail = new WebTextInput(element(by.id('email')), "Input Email");
    let inputPassword = new WebTextInput(element(by.id('userPassword')), "Input Password");
    let checkName = new WebTextView(element(by.css(".user-name")), "checkName Label");

    it('User should be able to login into eds_university.eleks.com', async () => {
        await browser.get('http://eds_university.eleks.com/login');
        
        let title = await browser.getTitle();
        
        expect(title).toEqual('Eleks');
        await loginButton.click(); 
        await inputEmail.sendKeys("Vasiliy.barladyn+scorer@gmail.com");
        await inputPassword.sendKeys("NbqwN28z8A+");
        await signInButton.click();

        let name = await checkName.getLabel();

        expect(name).toEqual('Vasyl Barladyn');
        console.log("User Name - " + name );
        
    });       
});