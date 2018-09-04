require("babel-register")({
    presets: [ 'babel-preset-es2015' ].map(require.resolve)
});

exports.config = {

    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },

    onPrepare: function() {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));
      },

    SELENIUM_PROMISE_MANAGER: 0,
    directConnect: false,
    framework: "jasmine2",
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites :{ 
        authenticationNegative: ["../test_specs/authentication/negative/*.js"],
        authenticationPositive: ["../test_specs/authentication/positive/*.js"],
        createProduct: ["../test_specs/administration/product/*.js"]
        
    },
    capabilities: {
        browserName: "chrome"
    }

};
