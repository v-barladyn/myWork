class Utils  {
    constructor(){
      
    }

    async waitForElement(elem) {
        
        await browser.wait(protractor.ExpectedConditions.presenceOf(elem), 5000, 'Element taking too long to appear in the DOM');
        //expect( await elem.isEnabled()).toBeTruthy();
        return elem;

    }


}
export default new Utils();