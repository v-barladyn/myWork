import ProductPage from "../../../../../pageObject/ProductPage";
import LoginPage from  "../../../../../pageObject/LoginPage";
import HeaderPage from "../../../../../pageObject/HeaderPage"
browser.ignoreSynchronization = true;

describe('Negative: Create product without family and name  ', () => {

    it('Negative : Try to create product without family and name', async () => {
        await LoginPage.opensSite(LoginPage.url);
        await LoginPage.openLoginForm();        
        await LoginPage.logIn(LoginPage.email, LoginPage.password);               
        await HeaderPage.switchToAdminTab();
        await ProductPage.addNewProd.click();
        await ProductPage.savePruductButton.click();           
        expect(await ProductPage.errorWhenNameIsBlanck.getLabel()).toEqual(ProductPage.textErrorWhenNameIsBlanck);
        expect(await ProductPage.errorWhenFamilyIsBlanck.getLabel()).toEqual(ProductPage.textErrorWhenFamilyIsBlanck);      
        
    });      
});