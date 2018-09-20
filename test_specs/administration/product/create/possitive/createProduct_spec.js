import ProductPage from "../../../../../pageObject/ProductPage";
import LoginPage from  "../../../../../pageObject/LoginPage";
import HeaderPage from "../../../../../pageObject/HeaderPage"
import Utils from "../../../../../pageObject/Utils"


describe('Product creation  ', () => {

    it('Creating New product', async () => {
        await LoginPage.opensSite(LoginPage.url);
        await LoginPage.openLoginForm();        
        await LoginPage.logIn(LoginPage.email, LoginPage.password);              
        await HeaderPage.switchToAdminTab();
        await ProductPage.addNewProduct(ProductPage.productName, ProductPage.familyName);
        await Utils.presenceOfElement(ProductPage.noticeSuccessfullyCreated);                 
        await ProductPage.searchForProduct(ProductPage.productName);
        expect(await ProductPage.productSearchresult.getLabel()).toEqual(ProductPage.productName);
        await LoginPage.logOut();
    });      
});