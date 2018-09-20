require("babel-register")({
    presets: [ 'babel-preset-es2015' ].map(require.resolve)
});

exports.config = {
    directConnect:true,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare:  function() {
        browser.ignoreSynchronization = true;
        
        let AllureReporter = require('jasmine-allure-reporter');
        let  originalAddExpectationResult =   jasmine.Spec.prototype.addExpectationResult;
        jasmine.Spec.prototype.addExpectationResult = function () {
            if (!arguments[0]) {
                browser.takeScreenshot().then(function (png) {
                    allure.createAttachment('Screenshot', function () {
                        return new Buffer(png, 'base64')
                    }, 'image/png')();
                })
            }
            return originalAddExpectationResult.apply(this, arguments);
        };

        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results',
        }));
    },
    
    //restartBrowserBetweenTests: true,
    //SELENIUM_PROMISE_MANAGER: 0,
    directConnect: false,
    framework: "jasmine2",
    allScriptsTimeout: 30000,   
    getPageTimeout: 30000,
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    
     suites : { 
         //authenticationNegative: ["../test_specs/authentication/negative/*.js"],
         //authenticationPositive: ["../test_specs/authentication/positive/*.js"],
         //createProductPossitive: ["../test_specs/administration/product/create/possitive/*.js"],
         createProductNegative: ["../test_specs/administration/product/create/negative/*.js"],
         //editProductPositive: ["../test_specs/administration/product/edit/possitive/*.js"],
         //deleteProductPossitive: ["../test_specs/administration/product/delete/possitive/*.js"]
                
    },
   capabilities: {
       browserName: "chrome"
   }
};
