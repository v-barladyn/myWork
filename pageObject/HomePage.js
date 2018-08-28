let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");

class HomePage {
    constructor(){ 
        

        this.adminTab = new WebButton(element(by.xpath("//a[contains(text(),'ADMINISTRATION')]")), "Admin Tab");
        this.productTab = new WebTextView(element(by.xpath("//a[contains(text(),'PRODUCTS')]")), "Product Tab");
        this.addNewProd = new WebButton(element(by.xpath("//span[contains(text(),'Add New Produc')]")), "Add New Product Tab");
        this.inputProdactName = new WebTextInput(element(by.css('#product')), "Input Product Name");
        this.productFamilyArea = new WebButton(element(by.xpath("//a[contains(text(),'No product family ')]")), "Choose product family");
        this.searchProducFamily = new WebTextInput(element(by.xpath('//span[@id="sizing-addon3"]/../input')), "Search product family");
        this.setProductFamily =  new WebButton(element(by.xpath("//a[@role='menuitem']/span")), "SetProductFamily");
        this.save = new WebButton(element(by.css('#saveProductAdd')), "Save button");
        this.serchForProduct = new WebTextInput(element(by.xpath("//input[@name='searchValue']")), "Search for product by name");
        this.findProduct = new WebTextView(element(by.xpath('//a[contains(text(),' + this.productName + ')]')), "Find product");

      
        this.productName = 'vasylbarladyn';
        this.familyName = 'AQA';
        this.url = 'http://eds_university.eleks.com/login';
        this.email = "Vasiliy.barladyn+scorer@gmail.com";
        this.password = "NbqwN28z8A+";
    }

    async switchToAdminTab(){
        browser.waitForAngularEnabled(true);
           
        await this.adminTab.click();
        await this.inputProdactName.sendKeys(this.productName);

        let label = await this.productTab.getLabel();
        expect(label).toEqual(this.tabLabel);  
    }   

    async addNewProduct(){
        await this.addNewProd.click();
        await this.inputProdactName.sendKeys(this.productName);
        await this.productFamilyArea.click();
        await this.searchProducFamily.sendKeys(this.familyName);
        await this.setProductFamily.click();
        await this.save.click();
         
        await this.serchForProduct.sendKeys(this.productName);
        let productName = await findProduct.getLabel();
        expect(productName).toEqual(this.productName); 
        
    }
}

module.exports = HomePage;