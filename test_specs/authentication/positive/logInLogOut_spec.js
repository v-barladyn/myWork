import LoginPage from  "../../../pageObject/LoginPage";

describe('Login Functionality', () => {    

    it('User should be able to logIn and logOut into/from eds_university.eleks.com', async () => {      
        
        await LoginPage.logIn(); 
        await LoginPage.logOut();       

    });  
    
});