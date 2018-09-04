import ProductPage from "../../../pageObject/ProductPage";
import LoginPage from  "../../../pageObject/LoginPage";
import HeaderPage from "../../../pageObject/HeaderPage"

describe('Product creation', () => {

    it('Product creation', async () => {
        await LoginPage.logIn();
        await HeaderPage.switchToAdminTab();
        await ProductPage.addNewProduct();        
        await ProductPage.searchForProduct();
        await LoginPage.logOut();      
    });        
});