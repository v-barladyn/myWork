exports.config = {

    jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
},
  SELENIUM_PROMISE_MANAGER: 0,
  directConnect: false,
  framework: "jasmine",
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ["../test_specs/*.js"],
 
  capabilities: {
    browserName: "chrome"
  }

};
