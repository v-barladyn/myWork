import WebControl from "../base/web.control";
import WebTextInput from "../controls/web.input";

export default class WebTextView extends WebControl {
    constructor(elementLocationObject, webElement, title) {
        super(elementLocationObject, webElement, title);
    }

    async getLabel() {
        await this.initializeWebControl();
        console.debug(`Get label from ${this.constructor.name} "${this.controlTitle}"`);
        return await this.getBaseControlWebElement().getText();
    }
}