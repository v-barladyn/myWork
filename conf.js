exports.config = {

    onPrepare: () => {          
        console.log('test is srarted');
        helper = require('./helpers/utils');
        tests = helper.utils;        
      },

          framework: "jasmine",
     // seleniumAddress: null,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test.js'],
    capabilities: {
        browserName: 'firefox'
    },

    params: {
        number1: 1,
        number2: 2
    }
  };