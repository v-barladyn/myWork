 const timeout = 5000;

 class Utils  {
    constructor(){
      
    }

    isElmVisible(elementFinder, waitTimeout) {
        let timeout = waitTimeout || shortTimeout;
        browser.manage().timeouts().implicitlyWait(0);
        return browser.wait(this.isVisible(elementFinder), timeout).then(
            () => { browser.manage().timeouts().implicitlyWait(implicitlyTimeout); return true; },
            () => { browser.manage().timeouts().implicitlyWait(implicitlyTimeout); return false; }
        );
    }

    /**
     * Check if elements present and displayed without wait. 'No element exception' safe.
     * @param elementArrayFinder - elements array locator.
     * @returns {promise.Promise<any>}
     */
    isElementsDisplayed(elementArrayFinder) {
        let allElmsDisplayed = true;
        browser.manage().timeouts().implicitlyWait(0);
        return elementArrayFinder.count().then((count) => {
            if (count > 0) {
                return elementArrayFinder.each((item) => {
                    item.isDisplayed().then((isDisplayed) => {
                        if (isDisplayed === false) {
                            allElmsDisplayed = false;
                        }
                    });
                }).then(() => {
                    browser.manage().timeouts().implicitlyWait(implicitlyTimeout);
                    return allElmsDisplayed;
                });
            } else {
                browser.manage().timeouts().implicitlyWait(implicitlyTimeout);
                return false;
            }
        });
    }
   
    waitForElmToBeClickable(elementFinder, timeout) {
        return browser.wait(this.isClickable(elementFinder), timeout);
    }

    isVisible(locator) {
        return protractor.ExpectedConditions.visibilityOf(locator);
    }

    isNotVisible(locator) {
        return protractor.ExpectedConditions.invisibilityOf(locator);
    }

    inDom(locator) {
        return protractor.ExpectedConditions.presenceOf(locator);
    }

    notInDom(locator) {
        return protractor.ExpectedConditions.stalenessOf(locator);
    }

    isClickable(locator) {
        return protractor.ExpectedConditions.elementToBeClickable(locator);
    }

    hasText(locator, text) {
        return protractor.ExpectedConditions.textToBePresentInElement(locator, text);
    }

    and(arrayOfFunctions) {
        return protractor.ExpectedConditions.and(arrayOfFunctions);
    }
}

export default new Utils();