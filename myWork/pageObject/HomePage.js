import WebButton from "../controls/web.button";
import WebTextInput from "../controls/web.input";
import WebTextView from "../controls/web.label";
browser.ignoreSynchronization = true;

class HomePage {
    constructor(){         

        this.adminTab = new WebButton(element(by.xpath("//a[contains(text(),'ADMINISTRATION')]")), "Admin Tab");
        this.productTab = new WebTextView(element(by.xpath("//a[contains(text(),'PRODUCTS')]")), "Product Tab");
        this.addNewProd = new WebButton(element(by.xpath("//span[contains(text(),'Add New Produc')]")), "Add New Product Tab");
        this.inputProdactName = new WebTextInput(element(by.css('#product-name')), "Input Product Name");
        this.productFamilyArea = new WebButton(element(by.xpath("//button[contains(text(),'No product family')]")), "Choose product family");
        this.searchProducFamily = new WebTextInput(element(by.xpath('//span[@id="sizing-addon3"]/../input')), "Search product family");
        this.setProductFamily =  new WebButton(element(by.xpath("//a[@role='menuitem']/span")), "SetProductFamily");
        this.save = new WebButton(element(by.css('#saveProductAdd')), "Save button");
        this.serchForProduct = new WebTextInput(element(by.xpath("//search-field/div/input[@name='searchValue']")), "Search for product by name");
        this.findProduct = new WebTextView(element(by.xpath("//a[contains(text(), 'vasylbarladyn')]")), "Find product");
        this.deleteButton = new  WebButton(element(by.xpath("/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[2]/project/div/div[1]/div/div[1]/div[2]/button[1]")), "Delete Button");

        this.productName = 'vasylbarladyn';
        this.familyName = 'AQA';
        this.url = 'http://eds_university.eleks.com/login';
        this.email = "Vasiliy.barladyn+scorer@gmail.com";
        this.password = "NbqwN28z8A+";
        this.tabLabel = 'PRODUCTS'
    }

    async switchToAdminTab(){  

        await this.adminTab.click();       
        let name = await this.productTab.getLabel();
        expect(name).toEqual(this.tabLabel);        
        
    }   

    async addNewProduct(){

        await this.addNewProd.click();
        await this.inputProdactName.sendKeys(this.productName);
        await this.productFamilyArea.click();
        await this.searchProducFamily.sendKeys(this.familyName);
        await this.setProductFamily.click();
        await this.save.click();         
        await this.serchForProduct.sendKeys(this.productName);       
        let name =  await this.findProduct.getLabel();
        expect(name).toEqual(this.productName); 
        
    }    

}

export default new HomePage();
