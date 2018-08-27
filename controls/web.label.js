let WebControl = require("../base/web.control");
let WebTextInput = require("../controls/web.input");

class WebTextView extends WebControl {
    constructor(elementLocationObject, webElement, title) {
        super(elementLocationObject, webElement, title);
    }

    async getLabel() {
        await this.initializeWebControl();
        console.debug(`Get label from ${this.constructor.name} "${this.controlTitle}"`);
        return await this.getBaseControlWebElement().getText();
    }
}

module.exports = WebTextView;