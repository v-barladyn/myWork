require("babel-register")({
    presets: [ 'babel-preset-es2015' ].map(require.resolve)
});

exports.config = {

    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },

    onPrepare: function() {
        let AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    
    jasmine.getEnv().afterEach(function(done){   
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    
    });
      },
    
    //restartBrowserBetweenTests: true,
    SELENIUM_PROMISE_MANAGER: 0,
    directConnect: false,
    framework: "jasmine2",
    allScriptsTimeout: 90000,
    getPageTimeout: 90000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites : { 
        //authenticationNegative: ["../test_specs/authentication/negative/*.js"],
        //authenticationPositive: ["../test_specs/authentication/positive/*.js"]
        createProduct: ["../test_specs/administration/product/*.js"]
                
    },
   capabilities: {
       browserName: "chrome"
   }
};
