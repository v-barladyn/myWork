import ProductPage from "../../../../../pageObject/ProductPage";
import LoginPage from  "../../../../../pageObject/LoginPage";
import HeaderPage from "../../../../../pageObject/HeaderPage"
browser.ignoreSynchronization = true;

describe('Product Deleting > ', () => {
    
    it('Delete   product', async () => {
        await LoginPage.opensSite(LoginPage.url);
        await LoginPage.openLoginForm();        
        await LoginPage.logIn(LoginPage.email, LoginPage.password);        
        await HeaderPage.switchToAdminTab();
        await ProductPage.searchForProduct(ProductPage.productName);
        await ProductPage.deleteProduct(ProductPage.productName);
        await ProductPage.searchForProduct(ProductPage.productName);               
        expect(await ProductPage.noResultsFoundAfterSearch.getLabel()).toEqual(ProductPage.noResults);
    });        
});