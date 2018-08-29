import WebControl from "../base/web.control";

export default class WebTextInput extends WebControl {
    constructor(elementLocationObject, webElement, title) {
        super(elementLocationObject, webElement, title);
    }

    async sendKeys(text) {
        await this.initializeWebControl();
        console.debug(`Send "${text}" to ${this.constructor.name} "${this.controlTitle}"`);
        await this.getBaseControlWebElement().clear().sendKeys(text);
    }
}