let utils = {

    openSite : function(url) {
        browser.get(url);
        console.log('URL is: ' + url);
        expect(browser.getCurrentUrl()).toEqual(url);
    }
};

module.exports.utils = utils;
