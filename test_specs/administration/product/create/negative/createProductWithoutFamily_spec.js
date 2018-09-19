import ProductPage from "../../../../../pageObject/ProductPage";
import LoginPage from  "../../../../../pageObject/LoginPage";
import HeaderPage from "../../../../../pageObject/HeaderPage"

describe('Negative: Create product without family  ', () => {

    it('Negative : create product without family', async () => {
        await LoginPage.opensSite();
        await LoginPage.openLoginForm();        
        await LoginPage.logIn(LoginPage.email, LoginPage.password);        
        await HeaderPage.switchToAdminTab();
        await ProductPage.addNewProduct(ProductPage.productName);       
        await ProductPage.searchForProduct(ProductPage.productName);
        expect(await ProductPage.productSearchresult.getLabel()).toEqual(ProductPage.productName);
        await LoginPage.logOut();
    });      
});