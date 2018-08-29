let HomePage = require("../pageObject/HomePage");
let LoginPage = require("../pageObject/LoginPage");

describe('Login Functionality', () => {
    
    let loginPage = new LoginPage();
    let homePage = new HomePage();    

    it('User should be able to login into eds_university.eleks.com', async () => {
       await loginPage.logIn();
       await homePage.switchToAdminTab();
       //await homePage.addNewProduct();
       //await loginPage.logOut();
    });    
    
});