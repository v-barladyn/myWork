let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");

describe('Login Functionality', () => {

    let loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
    let signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button"); 
    let inputEmail = new WebTextInput(element(by.id('email')), "Input Email");
    let inputPassword = new WebTextInput(element(by.id('userPassword')), "Input Password");
    let checkName = new WebTextView(element(by.css(".user-name")), "checkName Label");
    let url = 'http://eds_university.eleks.com/login';
    let email = "Vasiliy.barladyn+scorer@gmail.com";
    let wrongEmail = "rrrr@mail.com";
    let wrongPassword = 'asssss';
    let password = "NbqwN28z8A+";
    let siteTitle = 'Eleks';
    let pageLabel = 'Vasyl Barladyn';

    beforeAll(async() => {
        await browser.get(url);  
    });

    it('Negative: (with blank login and password) User should not be able to login into eds_university.eleks.com', async () => {
        
        await loginButton.click(); 
        let elm = await signInButton.getBaseControlWebElement().getAttribute('disabled')
        expect(elm).toBe('true');   
             
    });

    it('Negative: (with wrong login and password) User should not be able to login into eds_university.eleks.com', async () => {
        
        await inputEmail.sendKeys(wrongEmail);
        await inputPassword.sendKeys(wrongPassword);
        await signInButton.click();
        let title = await browser.getTitle();        
        expect(title).toEqual(siteTitle);   
             
    });

    it('Possitive: User should be able to login into eds_university.eleks.com', async () => {        
        
        await inputEmail.sendKeys(email);
        await inputPassword.sendKeys(password);
        await signInButton.click();
        let name = await checkName.getLabel();
        expect(name).toEqual(pageLabel);
        console.log("User Name - " + name );
        
    });

    afterAll(() => {
        console.log('Al login tests succesfully finished');  
    });

});