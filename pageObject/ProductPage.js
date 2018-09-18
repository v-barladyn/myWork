import WebButton from "../controls/web.button";
import WebTextInput from "../controls/web.input";
import WebTextView from "../controls/web.label";
import Utils from "./Utils";

browser.ignoreSynchronization = true;


class ProductPage  {
    constructor(){
      
    }

    get noticeSuccessfullyCreated(){
        return element(by.xpath("//div/span[contains(text(),'Product " + this.productName + " successfully created')]"));
    }

    get noticeSuccessfullyDeleted(){
        return element(by.xpath("//div/span[contains(text(),'Product " + this.productName + " successfully deleted')]"));
    }

    get addNewProd(){
        return new WebButton(element(by.xpath("//span[contains(text(),'Add New Produc')]")), "Add New Product Tab");
    }
    
    get inputProdactName(){
        return new WebTextInput(element(by.css('#product-name')), "Input Product Name");
    }

    get productFamilyArea(){
        return new WebButton(element(by.xpath("//button[contains(text(),'No product family')]/span")), "Choose product family");
    }

    get searchProducFamily(){
        return new WebTextInput(element(by.xpath('//span[@id="sizing-addon3"]/../input')), "Search product family");
    }

    get setProductFamily(){
        return new WebButton(element(by.xpath("//a[@role='menuitem']/span")), "SetProductFamily");
    }

    get savePruductButton(){
        return new WebButton(element(by.css('#saveProductAdd')), "Save button");
    }

    get productSerchfield(){
        return new WebTextInput(element(by.xpath("//div[@class='section__left']/div/search-field/div/input[@name='searchValue']")), "Search for product by name");
    }

    get productSearchresult(){
        return new WebTextView(element(by.xpath("//a[contains(text(), '" + this.productName + "')]")), "Find product");        
    }

    get productSearchresults(){
        return element(by.xpath("//a[contains(text(), '" + this.productName + "')]"));        
    }

    get noResultsFoundAfterSearch(){
        return new WebTextView(element(by.xpath("//p[contains(text(),'No Results Found')]")));
    }   

    get deleteProductButton(){
        return element(by.xpath("//div/button[@class='btn gds-btn-icon gds-delete-icon']"));
    }

    get noResults(){
        return "No Results Found";
    }

    get productName(){
        return 'vasylbarladyn';
    }

    get familyName(){
        return 'AQA';
    }

    get confirmationOfDeliting(){
        return element(by.xpath("//button[contains(text(),'Delete')][@aria-label='Close']"));
    }



    async addNewProduct(){

        await allure.createStep("Click on add New product",  async () => {
            await this.addNewProd.click();
        })();

        await allure.createStep("Input product name",  async () => {
            await this.inputProdactName.sendKeys(this.productName);
        })();

        await allure.createStep("Set product family",  async () => {
            await this.productFamilyArea.click();       
            await this.searchProducFamily.sendKeys(this.familyName);
            await this.setProductFamily.click();
        })();

        await allure.createStep("Save product",  async () => {
            await this.savePruductButton.click();        
            await browser.wait(protractor.ExpectedConditions.presenceOf(this.noticeSuccessfullyCreated), 5000, ' Notice Successfully Created Element taking too long to appear in the DOM');
        })();
    
    }    

    async searchForProduct(product){
        await allure.createStep("Search for created product",  async () => {
            await this.productSerchfield.sendKeys(product);
                        
        })();         
    }

    async deleteProduct(){
        await allure.createStep("Delete created product",  async () => {
            
            await browser.sleep(3000);

            await this.productSearchresult.click();
            await this.deleteProductButton.click();            
            await browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.confirmationOfDeliting), 5000, ' Notice Successfully Deleted Element taking too long to appear in the DOM');
            await this.confirmationOfDeliting.click();
            await browser.sleep(2000);

            await browser.wait(protractor.ExpectedConditions.presenceOf(this.noticeSuccessfullyDeleted), 5000, ' Notice Successfully Deleted Element taking too long to appear in the DOM');
 
        })();         
       
    }
    
    async waitForElement(elem) {
        await browser.wait(protractor.ExpectedConditions.presenceOf(elem), 5000, 'Element taking too long to appear in the DOM');
        return elem;
    }

  

}

export default new ProductPage();
