import ProductPage from "../../../pageObject/ProductPage";
import LoginPage from  "../../../pageObject/LoginPage";
import HeaderPage from "../../../pageObject/HeaderPage"

describe('Product creation > ', () => {

    it('Creating New product', async () => {

        await LoginPage.opensSite();
        await LoginPage.openLoginForm();        
        await LoginPage.logIn(LoginPage.email, LoginPage.password);        
        await HeaderPage.switchToAdminTab();
        await ProductPage.addNewProduct();       
        await ProductPage.searchForProduct();
        expect(await ProductPage.productSearchresult.getLabel()).toEqual(ProductPage.productName);

    });        
});