import WebButton from "../controls/web.button";
import WebTextInput from "../controls/web.input";
import WebTextView from "../controls/web.label";
browser.ignoreSynchronization = true;


class ProductPage {
    constructor(){                              
    }

    get noticeSuccessfullyCreated(){
        return element(by.xpath("//div/span[contains(text(),'" + this.productName + "')]"));
    }

    get noticeSuccessfullyDeleted(){
        return element(by.xpath("//div/span[contains(text(),'" + this.productName + "')]"));
    }

    get addNewProd(){
        return new WebButton(element(by.xpath("//span[contains(text(),'Add New Produc')]")), "Add New Product Tab");
    }
    
    get inputProdactName(){
        return new WebTextInput(element(by.css('#product-name')), "Input Product Name");
    }

    get productFamilyArea(){
        return new WebButton(element(by.xpath("//button[contains(text(),'No product family')]")), "Choose product family");
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

    get deleteProductButton(){
        return new  WebButton(element(by.xpath("/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[2]/project/div/div[1]/div/div[1]/div[2]/button[1]")), "Delete Button");
    }

    get productName(){
        return 'vasylbarladyn';
    }

    get familyName(){
        return 'AQA';
    }

    get confirmationOfDeliting(){
        return element(by.buttonText('Delete'));
    }



    async addNewProduct(){                    
        await this.addNewProd.click();
        await this.inputProdactName.sendKeys(this.productName);
        await this.productFamilyArea.click();       
        await this.searchProducFamily.sendKeys(this.familyName);
        await this.setProductFamily.click();
        await this.savePruductButton.click();        
        await browser.wait(protractor.ExpectedConditions.presenceOf(this.noticeSuccessfullyCreated), 5000, 'Element taking too long to appear in the DOM');
    }    

    async searchForProduct(){
        await this.productSerchfield.sendKeys(this.productName);
        expect(await this.productSearchresult.getLabel()).toEqual(this.productName);         
    }

    async deleteProduct(){
        await this.productSearchresult.click();
        await this.deleteProductButton.click();
        await browser.wait(protractor.ExpectedConditions.presenceOf(this.this.confirmationOfDeliting), 5000, 'Element taking too long to appear in the DOM');
        await this.confirmationOfDeliting.click();
        await browser.wait(protractor.ExpectedConditions.presenceOf(this.noticeSuccessfullyDeleted), 5000, 'Element taking too long to appear in the DOM');
        await browser.sleep(3000);
    }

   

}

export default new ProductPage();
