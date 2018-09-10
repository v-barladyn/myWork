import LoginPage from  "../../../pageObject/LoginPage";

describe('Login Functionality', () => {    

    it('User should be able to logIn and logOut into/from eds_university.eleks.com', async () => {       
        
        await allure.createStep("Log in",  async () => {
            await LoginPage.logIn(); 
        })();

        await allure.createStep("Log out",   async () => {
            await LoginPage.logOut(); 
        })();

    });  
    
});