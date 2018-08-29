import HomePage from "../pageObject/HomePage";
import LoginPage from  "../pageObject/LoginPage";

describe('Login Functionality', () => {

    it('User should be able to login into eds_university.eleks.com', async () => {
       await LoginPage.logIn();
       await HomePage.switchToAdminTab();
       await HomePage.addNewProduct();       
       await LoginPage.logOut();
    });    
    
});