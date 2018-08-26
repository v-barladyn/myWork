exports.config = {

  onPrepare: () => {          
    helper = require('../helpers/utils');
    tests = helper.utils;        
  },

  SELENIUM_PROMISE_MANAGER: 0,
  directConnect: false,
  framework: "jasmine",
  allScriptsTimeout: 45000,
  getPageTimeout: 30000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ["../test_specs/*.js"],
 
  capabilities: {
    browserName: "chrome"
  }

};
