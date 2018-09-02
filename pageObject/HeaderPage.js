import WebButton from "../controls/web.button";
import WebTextInput from "../controls/web.input";
import WebTextView from "../controls/web.label";
browser.ignoreSynchronization = true;

class HeaderPage {
    constructor(){ 
    }

    get adminTab(){
        return new WebButton(element(by.xpath("//a[contains(text(),'ADMINISTRATION')]")), "Admin Tab");
    }

    get productTab(){
        return new WebTextView(element(by.xpath("//a[contains(text(),'PRODUCTS')]")), "Product Tab");
    }

    get tabLabel(){
        return 'PRODUCTS';
    }
    

    async switchToAdminTab(){  

        await this.adminTab.click();       
        expect(await this.productTab.getLabel()).toEqual(this.tabLabel);        
        
    }   

    

}

export default new HeaderPage();
