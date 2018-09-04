import LoginPage from  "../../../pageObject/LoginPage";

describe('Login Functionality', () => {

    it('Negative: (with blank login and password) User should not be able to login into eds_university.eleks.com', async () => {
       
       await LoginPage.opensSite();     
       await LoginPage.loginButton.click();
       expect(await LoginPage.signInButton.getBaseControlWebElement().getAttribute('disabled')).toBe('true');  
    
    });  

});