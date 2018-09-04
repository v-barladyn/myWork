import LoginPage from  "../../../pageObject/LoginPage";

describe('Login Functionality', () => {

    it('Negative: (with wrong login and password) User should not be able to login into eds_university.eleks.com', async () => {
      
       await LoginPage.opensSite();
       await LoginPage.loginButton.click();
       await LoginPage.inputEmail.sendKeys(LoginPage.email);
       await LoginPage.inputPassword.sendKeys(LoginPage.wrongPassword);
       await LoginPage.signInButton.click();
       await browser.wait(protractor.ExpectedConditions.presenceOf(LoginPage.errorLoginwithWrongCredentials), 5000, 'Error when login with wrong credentials');        
    
    }); 

})