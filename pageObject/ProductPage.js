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

    get noticeSucessfullyUpdated(){
       return element(by.xpath("//div/span[contains(text(),'Product " + this.productNameForEdit + this.addEditYoName + " successfully updated')]"));        
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

    get savePruductAfterEditButton(){
        return new WebButton(element(by.css('#saveProductEdit')), "Save button");
    }

    get editProductButton(){
        return new WebButton(element(by.xpath("//button[@class='btn gds-btn-icon gds-edit-icon']")), "Edit  button");
    }

    get productSerchfield(){
        return new WebTextInput(element(by.xpath("//div[@class='section__left']/div/search-field/div/input[@name='searchValue']")), "Search for product by name");
    }

    get productSearchresult(){
        return new WebTextView(element(by.xpath("//a[contains(text(), '" + this.productName + "')]")), "Find product");        
    }

    get productSearchresultAfterEdit(){
        return new WebTextView(element(by.xpath("//a[contains(text(), '" + this.productNameForEdit + "')]")), "Find product");        
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

    get productNameForEdit(){
        return 'productForedit';
    }  

    get familyName(){
        return 'AQA';
    }

    get blanckFamilyName(){
        return '';
    }

    get addEditName(){
        return ' + edited';
    }

    get confirmationOfDeliting(){
        return element(by.xpath("//button[contains(text(),'Delete')][@aria-label='Close']"));
    }

    get errorWhenNameIsBlanck(){
        return new WebTextView(element(by.xpath("//div[@class='form-group read-only has-error']/div")), "Error when Product Name is blanck");
    }
    get textErrorWhenNameIsBlanck(){
        return 'Name is required.';
    }

    get errorWhenFamilyIsBlanck(){
        return new WebTextView(element(by.xpath("//div[@class='edit-poduct-family-list']/div")), "Error when product family is blanck");
    }

    get textErrorWhenFamilyIsBlanck(){
        return "Product Family is required.";
    }



    // Add new product: @name - product name, @family - product family

    async addNewProduct(name, family){

        await allure.createStep("Click on add New product",  async () => {
            await this.addNewProd.click();
        })();

        await allure.createStep("Input product name",  async () => {
            await this.inputProdactName.sendKeys(name);
        })();

        await allure.createStep("Set product family",  async () => {
            await this.productFamilyArea.click();       
            await this.searchProducFamily.sendKeys(family);
            await this.setProductFamily.click();
        })();

        await allure.createStep("Save product",  async () => {
            await this.savePruductButton.click();            
        })();
    
    }    
 
   // Search for product: @product - current product for search 

    async searchForProduct(product){
        await allure.createStep("Search for created product",  async () => {
            await this.productSerchfield.sendKeys(product);
            await browser.sleep(1000);   
                        
        })();         
    }
    
    // delete product: @product - current product for deliting 
     
    async deleteProduct(product){
        await this.searchForProduct(product);
        await allure.createStep("Delete created product",  async () => {
            await this.productSearchresult.click();
            await this.deleteProductButton.click();
            await Utils.elementIsClickable(this.confirmationOfDeliting);
            await browser.sleep(1000);                   
            await this.confirmationOfDeliting.click();                       
            await Utils.presenceOfElement(this.noticeSuccessfullyDeleted);    
        })();         
       
    }
     
     // edit product name (@productName - cuurent name of the product, @addSymbolToName Extra symbol to add  )

    async editProductName(productName, addSymbolToName){
        await  this.searchForProduct(productName);       
        await allure.createStep("Edit  product name, add adited syfix",  async () => {                      
            await this.productSearchresultAfterEdit.click();
            await this.editProductButton.click();          
            await this.inputProdactName.sendKeys(productName + addSymbolToName);
            await this.savePruductAfterEditButton.click();                                       
               
        })();         
    }

}

export default new ProductPage();
