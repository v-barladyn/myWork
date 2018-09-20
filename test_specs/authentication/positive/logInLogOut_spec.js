import LoginPage from  "../../../pageObject/LoginPage";


describe('Login Functionality', () => { 
       
    it('User should be able to logIn/LogOut   into/from eds_university.eleks.com', async () => {
        await LoginPage.opensSite(LoginPage.url);
        await LoginPage.openLoginForm();  
        await LoginPage.logIn(LoginPage.email, LoginPage.password);
        await  browser.waitForAngularEnabled(false);
        expect(await LoginPage.checkNameAfterLogIn.getLabel()).toEqual(LoginPage.pageLabel);    
        await LoginPage.logOut();      
    });      
});