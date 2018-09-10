import ProductPage from "../../../pageObject/ProductPage";
import LoginPage from  "../../../pageObject/LoginPage";
import HeaderPage from "../../../pageObject/HeaderPage"

describe('Product creation', () => {

    it('Product creation', async () => {

        await allure.createStep("Log in ",  async () => {
            await LoginPage.logIn();
        })();

        await allure.createStep("Swich to admin tab",  async () => {
            await HeaderPage.switchToAdminTab();
        })();

        await allure.createStep("Add new product",  async () => {
            await ProductPage.addNewProduct();
        })();

        await allure.createStep("Search for created product",  async () => {
            await ProductPage.searchForProduct();
        })();

        await allure.createStep("Log out",  async () => {
            await LoginPage.logOut();
        })();
            
    });        
});