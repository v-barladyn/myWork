 const timeout = 5000;
 const EC = protractor.ExpectedConditions;

 class Utils  {
    constructor(){
      
    }  
   
    async elementIsClickable(locator) {
        return await browser.wait(EC.elementToBeClickable(locator), timeout, "Element is not clicable");
    }       

    async elementHasText(locator, text) {       
        return await browser.wait(EC.textToBePresentInElement(locator, text), timeout, "No such text in the element");
    }   

    async presenceOfElement(locator) {
        return await browser.wait(EC.presenceOf(locator), timeout, 'Element taking too long to appear in the DOM');
    }       
}

export default new Utils();