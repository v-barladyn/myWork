import ProductPage from "../../../../../pageObject/ProductPage";
import LoginPage from  "../../../../../pageObject/LoginPage";
import HeaderPage from "../../../../../pageObject/HeaderPage";
import Utils from "../../../../../pageObject/Utils"


describe('Product Editing > ', () => {
    
    it('Etit   product name', async () => {
        await LoginPage.opensSite(LoginPage.url);
        await LoginPage.openLoginForm();        
        await LoginPage.logIn(LoginPage.email, LoginPage.password);                
        await HeaderPage.switchToAdminTab();       
        await ProductPage.editProductName(ProductPage.productNameForEdit, ProductPage.addEditName);               
        //await Utils.presenceOfElement(ProductPage.noticeSucessfullyUpdated);
        //await ProductPage.searchForProduct(ProductPage.productName + ProductPage.addEditName);               
        //expect(await ProductPage.productSearchresult.getLabel()).toEqual(ProductPage.noResults);        
        
    });   

});