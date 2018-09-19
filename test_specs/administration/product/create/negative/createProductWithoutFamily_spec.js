import ProductPage from "../../../../../pageObject/ProductPage";
import LoginPage from  "../../../../../pageObject/LoginPage";
import HeaderPage from "../../../../../pageObject/HeaderPage"

describe('Negative: Create product without family and name  ', () => {

    it('Negative : Try to create product without family and name', async () => {
        await LoginPage.opensSite();
        await LoginPage.openLoginForm();        
        await LoginPage.logIn(LoginPage.email, LoginPage.password);        
        await HeaderPage.switchToAdminTab();
        
        await LoginPage.addNewProd.click();
        await LoginPage.savePruductButton.click();
        expect(await ProductPage.errorWhenNameIsBlanck.getLabel()).toEqual(ProductPage.textErrorWhenNameIsBlanck);
        expect(await ProductPage.errorWhenFamilyIsBlanck.getLabel()).toEqual(ProductPage.textErrorWhenFamilyIsBlanck);


       
        
    });      
});