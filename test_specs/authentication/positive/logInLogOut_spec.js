import LoginPage from  "../../../pageObject/LoginPage";

describe('Login Functionality', () => {    

    it('User should be able to logIn and logOut into/from eds_university.eleks.com', async () => {

        await LoginPage.opensSite();
        await LoginPage.openLoginForm();  
        await LoginPage.logIn(LoginPage.email, LoginPage.password);
        expect(await LoginPage.checkNameAfterLogIn.getLabel()).toEqual(LoginPage.pageLabel);  
        await LoginPage.logOut();
        
    });  
    
});