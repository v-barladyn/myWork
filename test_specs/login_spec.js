import ProductPage from "../pageObject/ProductPage";
import LoginPage from  "../pageObject/LoginPage";
import HeaderPage from "../pageObject/HeaderPage"

describe('Login Functionality', () => {

    it('User should be able to login into eds_university.eleks.com', async () => {

       await LoginPage.logIn();
       await HeaderPage.switchToAdminTab();
       await ProductPage.addNewProduct();
       await ProductPage.searchForProduct();      
       await LoginPage.logOut();
       
    });    
    
});