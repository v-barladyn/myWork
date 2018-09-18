 class Utils  {
    constructor(){
      
    }

    async waitForElement(elem) {
        
        await browser.wait(protractor.ExpectedConditions.presenceOf(elem), 5000, 'Element taking too long to appear in the DOM');
        //expect( await elem.isEnabled()).toBeTruthy();
        return elem;

    }

    async waitForElmToBeClickable(elementFinder) {
        return await browser.wait(this.isClickable(elementFinder));
    }

    async isElmVisible(elementFinder, waitTimeout) {
        let shortTimeout = 5000;
        let implicitlyTimeout = 5000;
        let timeout = waitTimeout || shortTimeout;
        await browser.manage().timeouts().implicitlyWait(0);
        return await browser.wait(this.isVisible(elementFinder), timeout).then(
            () => { browser.manage().timeouts().implicitlyWait(implicitlyTimeout); return true; },
            () => { browser.manage().timeouts().implicitlyWait(implicitlyTimeout); return false; }
        );
    }

    async isNotVisible(locator) {
        return  await protractor.ExpectedConditions.invisibilityOf(locator);
    }

    async isClickable(locator) {
        return await browser.wait(protractor.ExpectedConditions.elementToBeClickable(locator), 5000, 'Element taking too long to appear in the DOM');

    }
    async isVisible(locator) {
        return await browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000, 'Element taking too long to appear in the DOM');
    }

    async isNotVisible(locator) {
        return await protractor.ExpectedConditions.invisibilityOf(locator);
    }


}

export default new Utils();