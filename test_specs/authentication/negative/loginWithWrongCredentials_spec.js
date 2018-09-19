import LoginPage from  "../../../pageObject/LoginPage";
import Utils from "../../../pageObject/Utils";

describe('Login Functionality', () => {
    
    it('Negative: (with corect login and wrong password) User should not be able to login ', async () => {        
        await LoginPage.opensSite();
        await LoginPage.openLoginForm();
        await LoginPage.logIn(LoginPage.email, LoginPage.wrongPassword);        
        await Utils.elementHasText(LoginPage.errorLoginwithWrongCredentials, LoginPage.errorTextAfterwongLogin);               
    }); 
 
    it('Negative: (with correct login and without password) User should not be able to login', async () => {        
        await LoginPage.opensSite();
        await LoginPage.openLoginForm();
        await LoginPage.logIn(LoginPage.email, LoginPage.blanckPassword);
        expect(await LoginPage.signInButton.getBaseControlWebElement().getAttribute('disabled')).toBe('true');               
    });
})