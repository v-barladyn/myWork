import LoginPage from  "../../../pageObject/LoginPage";
browser.ignoreSynchronization = true;
                                    


describe('Login Functionality', () => {

    it('Negative: (with blank login and password) User should not be able to login into eds_university.eleks.com', async () => {
        
        await LoginPage.opensSite(LoginPage.url);                 
        await LoginPage.openLoginForm();
        expect(await LoginPage.signInButton.getBaseControlWebElement().getAttribute('disabled')).toBe('true');  
       
    });  

});