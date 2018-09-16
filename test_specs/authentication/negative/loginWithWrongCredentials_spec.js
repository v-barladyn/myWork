import LoginPage from  "../../../pageObject/LoginPage";

describe('Login Functionality', () => {

    it('Negative: (with wrong login and password) User should not be able to login into eds_university.eleks.com', async () => {
        
        await LoginPage.opensSite();
        await LoginPage.openLoginForm();
        await LoginPage.logIn(LoginPage.email, LoginPage.wrongPassword);
        await browser.wait(protractor.ExpectedConditions.presenceOf(LoginPage.errorLoginwithWrongCredentials), 5000, 'Error when login with wrong credentials');      
               
    }); 
 
    it('Negative: (with correct  login and without password) User should not be able to login into eds_university.eleks.com', async () => {
        
        await LoginPage.opensSite();
        await LoginPage.openLoginForm();
        await LoginPage.logIn(LoginPage.email, "");
        expect(await LoginPage.signInButton.getBaseControlWebElement().getAttribute('disabled')).toBe('true');  
             
    });
    
    it('Negative: (with blank login and password) User should not be able to login into eds_university.eleks.com', async () => {
        
        await LoginPage.opensSite();                 
        await LoginPage.openLoginForm();
        expect(await LoginPage.signInButton.getBaseControlWebElement().getAttribute('disabled')).toBe('true');  
       
    });  

})